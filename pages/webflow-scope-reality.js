import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProtectedLayout from "../components/ProtectedLayout";
import Link from "next/link";
import NavBarHeader from '../components/navBarHeader';
import BootstrapNavBar from '../components/BootstrapNavBar'
import Footer from '../components/footer'
import { getListingsDataa, getListingsRealtym } from '../services/listingApiService'

export default function PracticeExamPageOne({ listingType }) {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [itemsCount, setItemsCount] = useState(0);
  const [showAdvanceFilter, setShowAdvanceFilter] = useState(false);
  const [filters, setFilters] = useState({
    featurePets: false,
    featureHasOpenHouse: false,
    featureNewListing: false,
    listingType: "listingRent",
    searchBy: "location",
    searchText: "",
    freeTextSearch: "",
    date: "",
    bed: 0,
    bath: 0,
    price: 0,
    parking: 0,
    featureSingle: false,
    featureSquareFootage: false,
    featureBasement: false,
    featureFrame: false,
    featureBrick: false,
    featureSemiAttached: false,
    featureDetached: false,
    featureAttached: false,
    featureLand: false,
    featureCoop: false,
    featureCondo: false,
    featureMultiFamily: false,
  });

  const onSelectProperty = (api, id) => {
    router.push(`listing-interface/${api}/${id}`)
  }

  useEffect(() => {
    setFilters({
      ...filters,
      listingType: listingType
    })
    onSearch()
  }, [listingType]);

  const onSearch = async () => {
    setIsLoading(true)

    const dataaReq = {
      amenities: "",
      extras: "",
    }
    const tempListingDataa = await getListingsDataa(dataaReq)

    const realtymReq = {
      amenities: "",
      extras: "",
      type: "",
    }
    if (filters.listingType) {
      realtymReq.status = filters.listingType == "listingRent" ? 2 : 1
    }
    if (filters.featurePets) {
      realtymReq.amenities = "pets"
    }
    if (filters.featureHasOpenHouse) {
      realtymReq.extras = "openhouse"
    }
    if (filters.featureNewListing) {
      realtymReq.amenities = "newConstruction "
    }
    if (filters.bed) {
      realtymReq.bedsMin = filters.bed
    }
    if (filters.bath) {
      realtymReq.bathMin = filters.bath
    }
    if (filters.price) {
      realtymReq.priceMax = filters.price
    }
    if (filters.featurePets) {
      realtymReq.pets = filters.featurePets ? 3 : 99
    }
    if (filters.featureCondo) {
      realtymReq.type = realtymReq.type ? realtymReq.type + ",Condo" : "Condo"
    }
    if (filters.featureCoop) {
      realtymReq.type = realtymReq.type ? realtymReq.type + ",Coop" : "Coop"
    }
    if (filters.featureLand) {
      realtymReq.type = realtymReq.type ? realtymReq.type + ",Land" : "Land"
    }
    if (filters.searchBy == "location" && filters.searchText) {
      realtymReq.address = filters.searchText
      realtymReq.city = filters.searchText
    }
    if (filters.searchBy == "zipCode" && filters.searchText) {
      realtymReq.zipcode = filters.searchText
    }
    if (filters.searchBy == "bedrooms" && filters.searchText) {
      realtymReq.bedsMin = filters.searchText
    }
    if (filters.freeTextSearch) {
      realtymReq.label = realtymReq.freeTextSearch
      realtymReq.address = filters.searchText
      realtymReq.city = filters.searchText
      realtymReq.zipcode = filters.searchText
    }
    const tempListingRealtym = await getListingsRealtym(realtymReq)
    mapData(tempListingDataa, tempListingRealtym)
  }

  const mapData = (tempListingDataa, tempListingRealtym) => {
    let tempItems = [];
    let itemCount = 0;

    itemCount += (tempListingRealtym?.TOTAL_COUNT && tempListingRealtym.TOTAL_COUNT > 0) ? tempListingRealtym.TOTAL_COUNT : 0;
    itemCount += (tempListingDataa?.TOTAL_COUNT && tempListingDataa.TOTAL_COUNT > 0) ? tempListingDataa.TOTAL_COUNT : 0;
    setItemsCount(itemCount);

    tempListingDataa?.LISTINGS.map(x => {
      tempItems.push({
        api: 1,
        id: x.ID,
        building: {
          address: x.ADDRESS,
          buildingId: x.BUILDING_ID,
          zipCode: x.ZIP_CODE
        },
        unit: x.UNIT_NUMBER,
        location: {
          neighborhoods: x.NEIGHBORHOODS,
          neighborhoodId: x.NEIGHBORHOOD_ID,
          city: x.CITY
        },
        price: x.PRICE,
        layout: {
          bathrooms: x.BATHROOMS,
          bedRooms: x.BEDROOMS,
          squareFootage: x.SQUARE_FOOTAGE,
        },
        availability: x.DATE_AVAILABLE,
        image: (x.PHOTOS && x.PHOTOS.length > 0) ? x.PHOTOS[0].PHOTO_URL : ''
      })
    })

    tempListingRealtym?.LISTINGS.map(x => {
      tempItems.push({
        api: 2,
        id: x.main_id,
        building: {
          address: x.main_address,
          street: x.main_street,
          house: x.main_house,
          zipCode: x.main_zipcode
        },
        unit: x.main_id,
        location: {
          neighborhoods: x.main_neighborhood,
          city: x.city
        },
        price: x.financials_price,
        layout: {
          bathrooms: x.essentials_bath,
          bedRooms: x.essentials_beds,
          rooms: x.essentials_rooms,
        },
        availability: x.available_date,
        image: x.main_image
      })
    })

    setItems(tempItems)
    setIsLoading(false)
  }

  const onChange = (e) => {
    e.persist()
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
  }

  const onCheck = (e) => {
    e.persist()
    setFilters({
      ...filters,
      [e.target.name]: e.target.checked
    })
  }

  const onClick = (name, value) => {
    setFilters({
      ...filters,
      [name]: value
    })
  }

  return (
    <div>
      {isLoading && <div className="overlay-sub-area" >
        <div className="spinner"></div>
        <br />
        <div className="spinner-grow text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>}
      <div>
        <header>
          <div className="b-top" />
        </header>
        {/* listing view section */}
        <section>
          <div className="b-cen c-bac">
            <div className="cen-i-top">
              <BootstrapNavBar />
            </div>
            <div className="cen-i-cen">
              <div className="container">
                <div className="cmp-pad-top-pad">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-2">
                      <div className="cmp-lis-hdr">
                        <h3>Listing Type</h3>
                      </div>
                      <div className="cmp-lis-typ">
                        <ul className="ctl-ulo-lis">
                          <li>
                            <div className="ctl-lis-btn">
                              <input
                                type="radio"
                                id="listingRent"
                                value="listingRent"
                                checked={filters.listingType == "listingRent"}
                                name="listingType"
                                onChange={onChange}
                              />
                              <label htmlFor="listingType">For Rent</label>
                            </div>
                          </li>
                          <li>
                            <div className="ctl-lis-btn">
                              <input
                                type="radio"
                                id="listingSale"
                                value="listingSale"
                                checked={filters.listingType == "listingSale"}
                                name="listingType"
                                onChange={onChange}
                              />
                              <label htmlFor="listingType">For Sale</label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-2">
                      <div className="cmp-lis-hdr">
                        <h3>Features</h3>
                      </div>
                      <div className="cmp-lis-typ">
                        <ul className="ctl-ulo-lis">
                          <li>
                            <div className="ctl-lis-btn">
                              <input type="checkbox" id="featurePets" name="featurePets" checked={filters.featurePets} onChange={onCheck} />
                              <label htmlFor="featurePets">Pets Ok</label>
                            </div>
                          </li>
                          <li>
                            <div className="ctl-lis-btn">
                              <input type="checkbox" id="featureHasOpenHouse" name="featureHasOpenHouse" checked={filters.featureHasOpenHouse} onChange={onCheck} />
                              <label htmlFor="featureHasOpenHouse">Has Open House</label>
                            </div>
                          </li>
                          <li>
                            <div className="ctl-lis-btn">
                              <input type="checkbox" id="featureNewListing" name="featureNewListing" checked={filters.featureNewListing} onChange={onCheck} />
                              <label htmlFor="featureNewListing">New Listing</label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-8">
                      <div className="ctl-tab-eso-top">
                        <div className="ctl-pil-tab-top">
                          <div className="cmp-lis-hdr">
                            <h3>Search By</h3>
                          </div>
                          <ul
                            className="ctl-tab-ind-bot nav nav-tabs"
                            id="myTabMD"
                            role="tablist"
                          >
                            <li className="nav-item waves-effect waves-light">
                              <a
                                className={filters.searchBy == "location" ? "active" : ""}
                                id="location-tab"
                                onClick={() => onClick("searchBy", "location")}
                              >
                                Location
                              </a>
                            </li>
                            <li className="nav-item waves-effect waves-light">
                              <a
                                className={filters.searchBy == "zipCode" ? "active" : ""}
                                onClick={() => onClick("searchBy", "zipCode")}
                                id="zipCode-tab"
                              >
                                Zip Code
                              </a>
                            </li>
                            <li className="nav-item waves-effect waves-light">
                              <a
                                id="bedrooms-tab"
                                className={filters.searchBy == "bedrooms" ? "active" : ""}
                                onClick={() => onClick("searchBy", "bedrooms")}
                              >
                                Bedrooms
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="tab-content cmp-lft-pad"
                          id="myTabContentMD"
                        >
                          <div
                            className="tab-pane fade active show"
                            id="tab-first"
                            role="tabpanel"
                            aria-labelledby="first-tab"
                          >
                            <div className="cmp-lis-hdr">
                              <h3>{filters.searchBy}</h3>
                            </div>
                            <div className="ctl-tab-eso-top">
                              <div className="ctl-frm-pot-box">
                                <label htmlFor="location" />
                                <input
                                  type="search"
                                  id="search"
                                  name="searchText"
                                  onChange={onChange}
                                  value={filters.searchText}
                                  className="ctl-pot-inp-box"
                                  placeholder={`Type ${filters.searchBy}`}
                                  required
                                />
                              </div>
                              <div className="ctl-pot-btn-bot">
                                <button type="submit">
                                  <svg
                                    width="15px"
                                    height="15px"
                                    viewBox="0 0 15 15"
                                    version="1.1"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="24--basic--screenshot">
                                      <path
                                        d="M4.65869 13.2009L5.625 14.062L6.59131 13.2009C9.67697 10.4509 11.25 8.00823 11.25 5.72166C11.25 2.47541 8.75872 0 5.625 0C2.49128 0 0 2.47541 0 5.72166C0 8.00823 1.57303 10.4509 4.65869 13.2009ZM5.625 1.875C7.72586 1.875 9.375 3.51363 9.375 5.72166C9.375 7.28695 8.15813 9.23146 5.625 11.5473C3.09187 9.23146 1.875 7.28695 1.875 5.72166C1.875 3.51363 3.52414 1.875 5.625 1.875ZM5.625 2.8125C7.1783 2.8125 8.4375 4.0717 8.4375 5.625C8.4375 7.1783 7.1783 8.4375 5.625 8.4375C4.0717 8.4375 2.8125 7.1783 2.8125 5.625C2.8125 4.0717 4.0717 2.8125 5.625 2.8125ZM4.6875 5.625C4.6875 5.10723 5.10723 4.6875 5.625 4.6875C6.14277 4.6875 6.5625 5.10723 6.5625 5.625C6.5625 6.14277 6.14277 6.5625 5.625 6.5625C5.10723 6.5625 4.6875 6.14277 4.6875 5.625Z"
                                        transform="translate(1.875 0.9375)"
                                        id="icon"
                                        fill="#000000"
                                        fillRule="evenodd"
                                        stroke="none"
                                      />
                                    </g>
                                  </svg>
                                </button>
                              </div>
                              <div className="clearfix" />
                            </div>
                            <div className="clearfix" />
                          </div>
                          <div
                            className="tab-pane fade"
                            id="tab-second"
                            role="tabpanel"
                            aria-labelledby="second-tab"
                          >
                            <div className="cmp-lis-hdr">
                              <h3>Zip Code</h3>
                            </div>
                            <div className="ctl-tab-eso-top">
                              <div className="ctl-frm-pot-box">
                                <label htmlFor="zipcode" />
                                <input
                                  type="text"
                                  id="zipcode"
                                  className="ctl-pot-inp-box"
                                  placeholder="Type Zipcode"
                                  required
                                />
                              </div>
                              <div className="ctl-pot-btn-bot">
                                <button type="submit">
                                  <svg
                                    width="15px"
                                    height="15px"
                                    viewBox="0 0 15 15"
                                    version="1.1"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="24--basic--screenshot">
                                      <path
                                        d="M4.65869 13.2009L5.625 14.062L6.59131 13.2009C9.67697 10.4509 11.25 8.00823 11.25 5.72166C11.25 2.47541 8.75872 0 5.625 0C2.49128 0 0 2.47541 0 5.72166C0 8.00823 1.57303 10.4509 4.65869 13.2009ZM5.625 1.875C7.72586 1.875 9.375 3.51363 9.375 5.72166C9.375 7.28695 8.15813 9.23146 5.625 11.5473C3.09187 9.23146 1.875 7.28695 1.875 5.72166C1.875 3.51363 3.52414 1.875 5.625 1.875ZM5.625 2.8125C7.1783 2.8125 8.4375 4.0717 8.4375 5.625C8.4375 7.1783 7.1783 8.4375 5.625 8.4375C4.0717 8.4375 2.8125 7.1783 2.8125 5.625C2.8125 4.0717 4.0717 2.8125 5.625 2.8125ZM4.6875 5.625C4.6875 5.10723 5.10723 4.6875 5.625 4.6875C6.14277 4.6875 6.5625 5.10723 6.5625 5.625C6.5625 6.14277 6.14277 6.5625 5.625 6.5625C5.10723 6.5625 4.6875 6.14277 4.6875 5.625Z"
                                        transform="translate(1.875 0.9375)"
                                        id="icon"
                                        fill="#000000"
                                        fillRule="evenodd"
                                        stroke="none"
                                      />
                                    </g>
                                  </svg>
                                </button>
                              </div>
                              <div className="clearfix" />
                            </div>
                            <div className="clearfix" />
                          </div>
                          <div
                            className="tab-pane fade"
                            id="tab-third"
                            role="tabpanel"
                            aria-labelledby="third-tab"
                          >
                            <div className="cmp-lis-hdr">
                              <h3>Bedrooms</h3>
                            </div>
                            <div className="ctl-tab-eso-top">
                              <div className="ctl-frm-pot-box">
                                <label htmlFor="bedrooms" />
                                <input
                                  type="text"
                                  id="bedrooms"
                                  className="ctl-pot-inp-box"
                                  placeholder="Type Bedrooms"
                                  required
                                />
                              </div>
                              <div className="ctl-pot-btn-bot">
                                <button type="submit">
                                  <svg
                                    width="15px"
                                    height="15px"
                                    viewBox="0 0 15 15"
                                    version="1.1"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="24--basic--screenshot">
                                      <path
                                        d="M4.65869 13.2009L5.625 14.062L6.59131 13.2009C9.67697 10.4509 11.25 8.00823 11.25 5.72166C11.25 2.47541 8.75872 0 5.625 0C2.49128 0 0 2.47541 0 5.72166C0 8.00823 1.57303 10.4509 4.65869 13.2009ZM5.625 1.875C7.72586 1.875 9.375 3.51363 9.375 5.72166C9.375 7.28695 8.15813 9.23146 5.625 11.5473C3.09187 9.23146 1.875 7.28695 1.875 5.72166C1.875 3.51363 3.52414 1.875 5.625 1.875ZM5.625 2.8125C7.1783 2.8125 8.4375 4.0717 8.4375 5.625C8.4375 7.1783 7.1783 8.4375 5.625 8.4375C4.0717 8.4375 2.8125 7.1783 2.8125 5.625C2.8125 4.0717 4.0717 2.8125 5.625 2.8125ZM4.6875 5.625C4.6875 5.10723 5.10723 4.6875 5.625 4.6875C6.14277 4.6875 6.5625 5.10723 6.5625 5.625C6.5625 6.14277 6.14277 6.5625 5.625 6.5625C5.10723 6.5625 4.6875 6.14277 4.6875 5.625Z"
                                        transform="translate(1.875 0.9375)"
                                        id="icon"
                                        fill="#000000"
                                        fillRule="evenodd"
                                        stroke="none"
                                      />
                                    </g>
                                  </svg>
                                </button>
                              </div>
                              <div className="clearfix" />
                            </div>
                            <div className="clearfix" />
                          </div>
                          <div className="clearfix" />
                        </div>
                        <div className="clearfix" />
                      </div>
                      <div className="clearfix" />
                    </div>
                  </div>
                </div>
                {showAdvanceFilter && <div className="cmp-pad-cen-pad">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-3">
                      <div className="cmp-lis-hdr">
                        <h3>Date</h3>
                      </div>
                      <div className="ctl-tab-eso-top">
                        <div className="ctl-frm-pot-box">
                          <label htmlFor="dmy"></label>
                          <input type="date" id="dmy" name="date" className="ctl-pot-inp-box" placeholder="DD/MM/YYYY" required="" onChange={onChange} />
                        </div>
                        {/* <div className="ctl-pot-btn-bot">
                          <button type="submit">
                            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M11.462 0.0244141L12.7879 1.35024L6.49995 7.63815L0.212036 1.35024L1.53786 0.0244141L6.49995 4.9865L11.462 0.0244141Z" fill="black" />
                            </svg>
                          </button>
                        </div> */}
                        <div className="clearfix"></div>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-2">
                      <div className="cmp-lis-hdr">
                        <h3>BED</h3>
                      </div>
                      <div className="ctl-tab-eso-top">
                        <div className="ctl-frm-pot-box">
                          <label htmlFor=""></label>
                          <input type="number" id="bed" name="bed" className="ctl-pot-inp-box" placeholder="0" required="" onChange={onChange} />
                        </div>
                        <div className="ctl-pot-btn-bot">
                          <button type="submit">
                            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M11.462 0.0244141L12.7879 1.35024L6.49995 7.63815L0.212036 1.35024L1.53786 0.0244141L6.49995 4.9865L11.462 0.0244141Z" fill="black" />
                            </svg>
                          </button>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-2">
                      <div className="cmp-lis-hdr">
                        <h3>Bath</h3>
                      </div>
                      <div className="ctl-tab-eso-top">
                        <div className="ctl-frm-pot-box">
                          <label htmlFor=""></label>
                          <input type="number" id="bath" name="bath" className="ctl-pot-inp-box" placeholder="0" required="" onChange={onChange} />
                        </div>
                        <div className="ctl-pot-btn-bot">
                          <button type="submit">
                            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M11.462 0.0244141L12.7879 1.35024L6.49995 7.63815L0.212036 1.35024L1.53786 0.0244141L6.49995 4.9865L11.462 0.0244141Z" fill="black" />
                            </svg>

                          </button>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3">
                      <div className="cmp-lis-hdr">
                        <h3>Price</h3>
                      </div>
                      <div className="ctl-tab-eso-top">
                        <div className="ctl-frm-pot-box">
                          <label htmlFor=""></label>
                          <input type="number" id="price" name="price" className="ctl-pot-inp-box" placeholder="0" required="" onChange={onChange} />
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-2">
                      <div className="cmp-lis-hdr">
                        <h3>Parking</h3>
                      </div>
                      <div className="ctl-tab-eso-top">
                        <div className="ctl-frm-pot-box">
                          <label htmlFor=""></label>
                          <input type="number" id="parking" name="parking" className="ctl-pot-inp-box" placeholder="Garage" required="" onChange={onChange} />
                        </div>
                        <div className="ctl-pot-btn-bot">
                          <button type="submit">
                            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M11.462 0.0244141L12.7879 1.35024L6.49995 7.63815L0.212036 1.35024L1.53786 0.0244141L6.49995 4.9865L11.462 0.0244141Z" fill="black" />
                            </svg>

                          </button>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>}
                <div className="cmp-pad-bot-pad">
                  <div className="row justify-content-end">
                    {showAdvanceFilter && <div className="col-sm-12 col-md-12 col-lg-8">
                      <div className="cmp-lis-hdr">
                        <h3>Features</h3>
                      </div>
                      <div className="cmp-lis-typ">
                        <div className="row">
                          <div className="col-sm-12 col-md-12 col-lg-3">
                            <ul className="ctl-ulo-lis">
                              <li>
                                <div className="ctl-lis-btn">
                                  <input type="checkbox" id="featureSingle" name="featureSingle" checked={filters.featureSingle} onChange={onCheck} />
                                  <label htmlFor="">Single</label>
                                </div>
                              </li>
                              <li>
                                <div className="ctl-lis-btn">
                                  <input type="checkbox" id="featureMultiFamily" name="featureMultiFamily" checked={filters.featureMultiFamily} onChange={onCheck} />
                                  <label htmlFor="">Multi Family</label>
                                </div>
                              </li>
                              <li>
                                <div className="ctl-lis-btn">
                                  <input type="checkbox" id="featureCondo" name="featureCondo" checked={filters.featureCondo} onChange={onCheck} />
                                  <label htmlFor="">Condo</label>
                                </div>
                              </li>
                              <li>
                                <div className="ctl-lis-btn">
                                  <input type="checkbox" id="featureCoop" name="featureCoop" checked={filters.featureCoop} onChange={onCheck} />
                                  <label htmlFor="">Coop</label>
                                </div>
                              </li>
                              <li>
                                <div className="ctl-lis-btn">
                                  <input type="checkbox" id="featureLand" name="featureLand" checked={filters.featureLand} onChange={onCheck} />
                                  <label htmlFor="">Land</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 col-md-12 col-lg-3">
                            <ul className="ctl-ulo-lis">
                              <li>
                                <div className="ctl-lis-btn">
                                  <input type="checkbox" id="featureAttached" name="featureAttached" checked={filters.featureAttached} onChange={onCheck} />
                                  <label htmlFor="">Attached</label>
                                </div>
                              </li>
                              <li>
                                <div className="ctl-lis-btn">
                                  <input type="checkbox" id="featureDetached" name="featureDetached" checked={filters.featureDetached} onChange={onCheck} />
                                  <label htmlFor="">Detached</label>
                                </div>
                              </li>
                              <li>
                                <div className="ctl-lis-btn">
                                  <input type="checkbox" id="featureSemiAttached" name="featureSemiAttached" checked={filters.featureSemiAttached} onChange={onCheck} />
                                  <label htmlFor="">Semi Attached</label>
                                </div>
                              </li>
                              <li>
                                <div className="ctl-lis-btn">
                                  <input type="checkbox" id="featureBrick" name="featureBrick" checked={filters.featureBrick} onChange={onCheck} />
                                  <label htmlFor="">Brick</label>
                                </div>
                              </li>
                              <li>
                                <div className="ctl-lis-btn">
                                  <input type="checkbox" id="featureFrame" name="featureFrame" checked={filters.featureFrame} onChange={onCheck} />
                                  <label htmlFor="">Frame</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 col-md-12 col-lg-3">
                            <ul className="ctl-ulo-lis">
                              <li>
                                <div className="ctl-lis-btn">
                                  <input type="checkbox" id="featureBasement" name="featureBasement" checked={filters.featureBasement} onChange={onCheck} />
                                  <label htmlFor="">Basement</label>
                                </div>
                              </li>
                              <li>
                                <div className="ctl-lis-btn">
                                  <input type="checkbox" id="featureSquareFootage" name="featureSquareFootage" checked={filters.featureSquareFootage} onChange={onCheck} />
                                  <label htmlFor="">Square Footage</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                    </div>}
                    <div className="col-sm-12 col-md-12 col-lg-4 align-self-end">
                      <div className="ctl-cmp-flx-blo">
                        <div className="cmp-sho-adv-lft">
                          <div className="ctl-adv-ser-blo" style={{ cursor: 'pointer' }} onClick={() => setShowAdvanceFilter(!showAdvanceFilter)}>
                            <h3>{`${showAdvanceFilter ? 'HIDE' : 'SHOW'}`} ADVANCE SEARCH</h3>
                          </div>
                        </div>
                        <div className="cmp-sho-adv-rit">
                          <div className="ctl-com-flx-blo">
                            <div className="ctl-frn-pot-box " id="ctlInputBox">
                              <label htmlFor="search"></label>
                              <input type="text" id="search" className="ctl-pot-inp-box" placeholder="Type Zipcode" required="" />
                            </div>
                            <div className="ctl-poa-inp-box">
                              <button type="submit" id="ctlSubmit" onClick={() => onSearch()}> SEARCH
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M8.75 15.75C4.88401 15.75 1.75 12.616 1.75 8.75C1.75 4.88401 4.88401 1.75 8.75 1.75C12.616 1.75 15.75 4.88401 15.75 8.75C15.75 10.3676 15.2013 11.8571 14.2799 13.0424L18.9937 17.7563L17.7563 18.9937L13.0424 14.2799C11.8571 15.2013 10.3676 15.75 8.75 15.75ZM14 8.75C14 11.6495 11.6495 14 8.75 14C5.8505 14 3.5 11.6495 3.5 8.75C3.5 5.8505 5.8505 3.5 8.75 3.5C11.6495 3.5 14 5.8505 14 8.75Z" fill="black" />
                                </svg>

                              </button>
                            </div>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="clearfix" />
          </div>
          <div className="b-bot">
            <div className="bot-i-top">
              <div className="container">
                <div className="cmp-cen-pad-top">
                  <div className="cmp-lis-hdr-top">
                    <div className="row">
                      <div className="col-sm-12 col-md-4 col-lg-7">
                        <div className="cmp-num-lis-hdr">
                          <h3>{itemsCount} Listing</h3>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-8 col-lg-5">
                        <div className="cmp-key-flx-rit">
                          <div className="ctl-frm-key-box">
                            <label htmlFor="keyword" />
                            <input
                              type="search"
                              id="keyword"
                              className="ctl-key-inp-box"
                              name="freeTextSearch"
                              onChange={onChange}
                              value={filters.freeTextSearch}
                              placeholder="Search by keywords"
                            />
                          </div>
                          <div className="ctl-key-btn-box">
                            <button type="submit" onClick={() => onSearch()}> Search</button>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cmp-lis-hdr-cen">
                    <ul className="cmp-mar-cus-bot">
                      {items && items.length > 0 &&
                        items.map((item, index) => {
                          return (<li key={index}>
                            <div className="cmp-lis-flx-inf">
                              <div className="ctl-inf-com-con">
                                <div className="ctl-lis-pic-lft cursor-pointer" onClick={() => onSelectProperty(item.api, item.id)}>
                                  <div>
                                    <div className="ctl-com-inf-con">
                                      <div className="ctl-lis-pic-con">
                                        <img src={item.image} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="ctl-lis-inf-rit">
                                  <div>
                                    <div className="ctl-com-inf-con">
                                      <div className="ctl-bui-com-hdr">
                                        <div className="ctl-lis-sel-inf">
                                          <div style={{ color: "#3898ec", fontSize: "16px", fontWeight: "bold" }}>Building</div>
                                        </div>
                                      </div>
                                      <div className="ctl-bui-com-des">
                                        <h3>{item.building?.address}</h3>
                                        <p>{item.building?.house}</p>
                                        <p>{item.building?.street}</p>
                                      </div>
                                      <div className="clearfix" />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="ctl-com-inf-con">
                                      <div className="ctl-bui-com-hdr">
                                        <div className="ctl-lis-sel-inf">
                                          <div style={{ color: "#3898ec", fontSize: "16px", fontWeight: "bold" }}>Unit</div>
                                        </div>
                                      </div>
                                      <div className="ctl-bui-com-des">
                                        <p>{item.unit}</p>
                                      </div>
                                      <div className="clearfix" />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="ctl-com-inf-con">
                                      <div className="ctl-bui-com-hdr">
                                        <div className="ctl-lis-sel-inf">
                                          <div style={{ color: "#3898ec", fontSize: "16px", fontWeight: "bold" }}>Location</div>
                                        </div>
                                      </div>
                                      <div className="ctl-bui-com-des">
                                        <p>{item.location?.neighborhoods}, {item.location?.city}</p>
                                      </div>
                                      <div className="clearfix" />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="ctl-com-inf-con">
                                      <div className="ctl-bui-com-hdr">
                                        <div className="ctl-lis-sel-inf">
                                          <div style={{ color: "#3898ec", fontSize: "16px", fontWeight: "bold" }}>Price</div>
                                        </div>
                                      </div>
                                      <div className="ctl-bui-com-des">
                                        <p>${item.price}</p>
                                      </div>
                                      <div className="clearfix" />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="ctl-com-inf-con">
                                      <div className="ctl-bui-com-hdr">
                                        <div className="ctl-lis-sel-inf">
                                          <div style={{ color: "#3898ec", fontSize: "16px", fontWeight: "bold" }}>Layout</div>
                                        </div>
                                      </div>
                                      <div className="ctl-bui-com-des">
                                        <p>{item.layout?.bedRooms} Bed</p>
                                        <p>{item.layout?.bathrooms}  Baths</p>
                                        {item.layout?.squareFootage && <p>{item.layout?.squareFootage}  SQFT </p>}
                                      </div>
                                      <div className="clearfix" />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="ctl-com-inf-con">
                                      <div className="ctl-bui-com-hdr">
                                        <div className="ctl-lis-sel-inf">
                                          <div style={{ color: "#3898ec", fontSize: "16px", fontWeight: "bold" }}>Date Available</div>
                                        </div>
                                      </div>
                                      <div className="ctl-bui-com-des">
                                        <p>{item.availability}</p>
                                      </div>
                                      <div className="clearfix" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>)
                        })}
                    </ul>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return { props: { listingType: context?.query?.listingType || "listingRent" } }
}