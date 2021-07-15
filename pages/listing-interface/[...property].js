import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ProtectedLayout from "../../components/ProtectedLayout";
import { getListingsDataaById, getListingsRealtymById } from '../../services/listingApiService'

export default function ListingInterface({ property }) {
  const router = useRouter();
  return (
    <ProtectedLayout>
      <section className="single-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <h2 className="big-head">{property?.address}</h2>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="single-carousel-wrapper mt-20">
                <div className="owl-carousel owl-theme single-inner-carousel">
                  <div className="item">
                    <img src={property?.image} alt="slide" style={{ maxHeight: "450px" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="sidebar-single mt-20">
                <div className="single-side-bar-wrapper">
                  <div className="sidebar-header">
                    <h3 className="price">${property?.price}</h3>
                    <p className="ammenities">
                      {property?.rooms && `${property?.rooms} rooms |`} {property?.rooms && `${property?.bedRooms} beds |`} {property?.rooms && `${property?.bathRooms} bath`}
                    </p>
                    <p>{property?.neighborhood}</p>
                  </div>
                  <ul className="side-bar-list">
                    <li>
                      <p>Listing ID</p>
                      <p>{property?.id}</p>
                    </li>
                    <li>
                      <p>Listed By</p>
                      <p>{property?.agent}</p>
                    </li>
                    <li>
                      <p>Floor</p>
                      <p>{property?.floor}</p>
                    </li>
                    <li>
                      <p>Date Listed</p>
                      <p>{property?.date}</p>
                    </li>
                    <li>
                      <p>Date Available</p>
                      <p>{property?.available}</p>
                    </li>
                    <li>
                      <p>Min. Lease Term</p>
                      <p>{property?.minLease}</p>
                    </li>
                    <li>
                      <p>Max. Lease Term</p>
                      <p>{property?.maxLease}</p>
                    </li>
                    <li>
                      <p>Pet Policy</p>
                      <p>{property?.pet}</p>
                    </li>
                    <li>
                      <p>Exposure</p>
                      <p>{property?.exposure}</p>
                    </li>
                    <li>
                      <p>Condition</p>
                      <p>{property?.condition}</p>
                    </li>
                  </ul>
                </div>
                <a href="#" className="cta-btn btn-lg mt-20">
                  {" "}
                  Message us for more informations
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="wrapper">
                <div className="single-desc mt-20">
                  <h3 className="head">Description</h3>
                  <p className="para">
                    {property?.description}
                  </p>
                </div>
                <div className="features mt-60">
                  <div className="row">
                    <div className="col-12 mb-20">
                      <h3 className="head">Features</h3>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/bellboy 1.svg" alt="" />
                        <span>Doorman</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/subway 1.svg" alt="" />
                        <span>Subway</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/open-door 1.svg" alt="" />
                        <span>Receiving Room</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/elevator 1.svg" alt="" />
                        <span>Elevator</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/washer 1.svg" alt="" />
                        <span>Laundry</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/bellboy 1.svg" alt="" />
                        <span>Concierge</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/barbell 1.svg" alt="" />
                        <span>Health Club</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/boxes 1.svg" alt="" />
                        <span>Storage</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/super 1.png" alt="" />
                        <span>Live In Super</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/garage 1.svg" alt="" />
                        <span>Garage</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/valet 1.svg" alt="" />
                        <span>Valet</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/Union.svg" alt="" />
                        <span>One Month Free</span>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" className="cta-btn mt-20 btn-lg">
                  View more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProtectedLayout>
  );
}

export async function getServerSideProps(context) {
  let tempRes = {};
  if (context?.query?.property?.length > 1 && context.query.property[0] == "1") {
    const res = await getListingsDataaById(context.query.property[1])
    if (res?.LISTINGS?.length > 0) {
      tempRes.price = res.LISTINGS[0].PRICE
      tempRes.rooms = res.LISTINGS[0].TOTAL_ROOMS
      tempRes.bathRooms = res.LISTINGS[0].BATHROOMS
      tempRes.bedRooms = res.LISTINGS[0].BEDROOMS
      tempRes.neighborhood = res.LISTINGS[0].NEIGHBORHOODS
      tempRes.id = res.LISTINGS[0].ID
      tempRes.agent = res.LISTINGS[0].MANAGEMENT_COMPANY
      tempRes.floor = res.LISTINGS[0].FLOOR_NUMBER
      tempRes.date = res.LISTINGS[0].DATE_CREATE
      tempRes.available = res.LISTINGS[0].DATE_AVAILABLE
      tempRes.minLease = res.LISTINGS[0].MIN_LEASE_TERM
      tempRes.maxLease = res.LISTINGS[0].MAX_LEASE_TERM
      tempRes.pet = res.LISTINGS[0].PETS_POLICY
      tempRes.exposure = res.LISTINGS[0].EXPOSURE_REMARK
      tempRes.condition = res.LISTINGS[0].CONDITION
      tempRes.description = res.LISTINGS[0].DESCRIPTION
      tempRes.image = (res.LISTINGS[0]?.PHOTOS?.length > 0) ? res.LISTINGS[0].PHOTOS[0].PHOTO_URL : ''
      tempRes.address = res.LISTINGS[0].ADDRESS
    }
  } else {
    const res = await getListingsRealtymById(context.query.property[1])
    if (res?.length > 0) {
      tempRes.price = res[0].financials_price
      tempRes.rooms = res[0].essentials_rooms
      tempRes.bathRooms = res[0].essentials_bath
      tempRes.bedRooms = res[0].essentials_beds
      tempRes.neighborhood = res[0].main_neighborhood
      tempRes.id = res[0].main_id
      tempRes.agent = res[0].agents_agent_name
      tempRes.floor = res[0].essentials_floor
      tempRes.date = res[0].essentials_date
      tempRes.available = res[0].essentials_available
      tempRes.minLease = res[0].financials_monthsfreereqminlease
      tempRes.pet = res[0].essentials_pets
      tempRes.description = res[0].main_description
      tempRes.image = res[0].main_image
      tempRes.address = res[0].main_address
    }
  }
  return { props: { property: tempRes } }
}
