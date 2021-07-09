import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { toast } from "react-nextjs-toast";
import { session, useSession, getSession } from "next-auth/client";
import ProtectedLayout from "../../components/ProtectedLayout";
import Profile from "../../models/Profile";
import dbConnect from "../../utils/dbConnect";

const Tab = ({ profile }) => {
  const router = useRouter();
  const [session] = useSession();

  const [tab, setTab] = useState("profile");

  useEffect(() => {
    if (router.asPath !== router.route) {
      const { tab } = router.query;
      setTab(tab);
    }
  }, [router]);

  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    zipCode: "",
    timeZone: "",
    state: "",
    country: "",
    phoneNumber: "",
    personalBillingRoutingNumber: "",
    personalBillingAccountNumber: "",
    businessBillingRoutingNumber: "",
    businessBillingAccountNumber: "",
    ...profile,
  });

  console.log(form);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = session.user.id;
    const res = fetch(`/api/profile/${id}`, {
      method: "PUT",
      headers: {
        Accept: contentType,
        "Content-Type": contentType,
      },
      body: JSON.stringify(form),
    });

    res.then((va) => {
      if (va) {
        toast.notify(`Profile has been updated!`, {
          duration: 5,
          type: "success",
        });
      }
    });

    // const errs = formValidate()
    // if (Object.keys(errs).length === 0) {
    //   forNewPet ? postData(form) : putData(form)
    // } else {
    //   setErrors({ errs })
    // }
  };

  return (
    <ProtectedLayout>
      <section className="single-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h2 className="big-head text-center ctl-hdr-mar-bot">Profile</h2>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <form onSubmit={handleSubmit}>
                <div className="ctl-pro-inf-blo">
                  <div className="ctl-pro-int-top ctl-bor-bot">
                    <div className="row">
                      <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                        <div className="ctl-dis-flx">
                          <div className="ctl-pit-lft">
                            <img
                              src={
                                (session &&
                                  session.user &&
                                  session.user.image) ||
                                "/images/profile.svg"
                              }
                              alt=""
                              title=""
                            />
                          </div>
                          <div className="ctl-inf-rit">
                            <div className="ctl-hdr-nme">
                              <h4>NAME</h4>
                            </div>
                            <div className="ctl-nme-det">
                              <div className="ctl-nme-lft">
                                <h4>
                                  {session && session.user && session.user.name}
                                </h4>
                              </div>
                              <div className="ctl-edt-rit">
                                <img src="/images/edit.svg" alt="" title="" />
                              </div>
                            </div>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 m-auto">
                        <ul className="ctl-rit-lnk">
                          <li>
                            <Link href="/profile/profile" passHref>
                              <a
                                href="#"
                                className={
                                  tab == "profile" ? "ctl-act-cls" : ""
                                }
                              >
                                <img
                                  src="/images/profile.svg"
                                  alt=""
                                  title=""
                                />{" "}
                                Profile
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/profile/billing" passHref>
                              <a
                                href="#"
                                href="#!"
                                className={
                                  tab == "billing" ? "ctl-act-cls" : ""
                                }
                              >
                                <img
                                  src="/images/billing.svg"
                                  alt=""
                                  title=""
                                />{" "}
                                Billing
                              </a>
                            </Link>
                          </li>
                          <li>
                            <a href="#!">
                              <img src="/images/refer.svg" alt="" title="" />
                              Refer A Friend
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {tab == "profile" && (
                    <div className="ctl-pro-int-bot">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <div className="ctl-inf-bot">
                            <div className="ctl-com-inp ctl-mar-bot">
                              <label htmlFor="addr">ADDRESS LINE 1:</label>
                              <input
                                type="text"
                                id="addressLine1"
                                name="addressLine1"
                                value={form.addressLine1}
                                onChange={handleChange}
                                placeholder="THE VANDERBILT"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <div className="ctl-com-inp ctl-mar-bot">
                            <label htmlFor="addrr">
                              ADDRESS LINE 2 (OPTIONAL):
                            </label>
                            <input
                              type="text"
                              name="addressLine2"
                              value={form.addressLine2}
                              onChange={handleChange}
                              placeholder="235 East 40th Street 40B Scope Reality"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                              <div className="ctl-com-inp ctl-mar-bot">
                                <label htmlFor="city">CITY:</label>
                                <input
                                  type="text"
                                  id="city"
                                  name="city"
                                  value={form.city}
                                  onChange={handleChange}
                                  placeholder="New York"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                              <div className="ctl-com-inp ctl-mar-bot">
                                <label htmlFor="zipcode">ZIP CODE:</label>
                                <input
                                  type="number"
                                  id="zipcode"
                                  name="zipCode"
                                  value={form.zipCode}
                                  onChange={handleChange}
                                  placeholder="10016"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                              <div className="ctl-com-inp ctl-mar-bot">
                                <label htmlFor="state">STATE:</label>
                                <input
                                  type="text"
                                  id="state"
                                  name="state"
                                  value={form.state}
                                  onChange={handleChange}
                                  placeholder="New York"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                              <div className="ctl-com-inp ctl-mar-bot">
                                <label htmlFor="country">COUNTRY:</label>
                                <input
                                  type="text"
                                  id="country"
                                  name="country"
                                  value={form.country}
                                  onChange={handleChange}
                                  placeholder="United States"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <div className="ctl-com-inp ctl-mar-bot">
                            <label htmlFor="timezone">TIME ZONE:</label>
                            <input
                              type="text"
                              id="timezone"
                              name="timezone"
                              value={form.timezone}
                              onChange={handleChange}
                              placeholder="GMT-4"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <div className="ctl-com-inp ctl-mar-bot">
                            <label htmlFor="pnumber">PHONE NUMBER:</label>
                            <input
                              type="number"
                              id="pnumber"
                              name="phoneNumber"
                              value={form.phoneNumber}
                              onChange={handleChange}
                              placeholder="+1 222 333 22"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {tab == "billing" && (
                    <div className="ctl-pro-int-bot">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <div className="ctl-hdr-txt">
                            <h4>Personal Account</h4>
                          </div>
                          <div className="ctl-inf-bot">
                            <div className="ctl-com-inp ctl-mar-bot">
                              <label htmlFor="number">ROUTING NUMBER</label>
                              <input
                                type="number"
                                id="personalBillingRoutingNumber"
                                name="personalBillingRoutingNumber"
                                value={form.personalBillingRoutingNumber}
                                onChange={handleChange}
                                placeholder="000000000"
                              />
                            </div>
                            <div className="ctl-com-inp">
                              <label htmlFor="acc_num">ACCOUNT NUMBER</label>
                              <input
                                type="number"
                                id="personalBillingAccountNumber"
                                name="personalBillingAccountNumber"
                                value={form.personalBillingAccountNumber}
                                onChange={handleChange}
                                placeholder="000000000"
                              />
                            </div>
                            <div className="clearfix" />
                          </div>
                          <div className="clearfix" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <div className="ctl-hdr-txt">
                            <h4>Business Account (Optional)</h4>
                          </div>
                          <div className="ctl-inf-bot">
                            <div className="ctl-com-inp ctl-mar-bot">
                              <label htmlFor="number">ROUTING NUMBER</label>
                              <input
                                type="number"
                                id="businessBillingRoutingNumber"
                                name="businessBillingRoutingNumber"
                                value={form.businessBillingRoutingNumber}
                                onChange={handleChange}
                                placeholder="000000000"
                              />
                            </div>
                            <div className="ctl-com-inp">
                              <label htmlFor="acc_num">ACCOUNT NUMBER</label>
                              <input
                                type="number"
                                id="businessBillingAccountNumber"
                                name="businessBillingAccountNumber"
                                value={form.businessBillingAccountNumber}
                                onChange={handleChange}
                                placeholder="000000000"
                              />
                            </div>
                            <div className="clearfix" />
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="container">
                    <div className="row px-4 py-3">
                      <button
                        className="btn btn-success pull-right px-4"
                        type="submit"
                      >
                        SAVE
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </ProtectedLayout>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  /* find all the data in our database */
  const session = await getSession({ req });

  if (!session) {
    return { props: { profile: {} } };
  }

  await dbConnect();

  const data = await Profile.findById(session.user.id);

  return { props: { profile: JSON.parse(JSON.stringify(data)) } };
};

export default Tab;
