import { useEffect } from "react";

function AgentDetails({ details }) {
  useEffect(() => {
    console.log("details: ", details);
  });

  return (
    <div className="ctl-ceo-bck-blo">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-4">
          <div className="cmp-ceo-blo-box">
            <div className="ctl-ceo-ico-top">
              <img src="/images/ceo.jpg" alt="" />
            </div>
            <div className="ctl-ceo-soc-bot">
              <ul>
                <li>
                  <a href="#!">
                    <svg
                      width={56}
                      height={61}
                      viewBox="0 0 56 61"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d)">
                        <circle cx={28} cy={23} r={18} fill="white" />
                      </g>
                      <g filter="url(#filter1_d)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22 15.5H34C34.8284 15.5 35.5 16.1716 35.5 17V29C35.5 29.8284 34.8284 30.5 34 30.5H22C21.1716 30.5 20.5 29.8284 20.5 29V17C20.5 16.1716 21.1716 15.5 22 15.5ZM22 17V29H34V17H22ZM28.75 20.75C28.3617 20.75 27.9514 20.8687 27.5891 21.0891L27.25 20.75H26.5V26H28V23C28 22.5682 28.4455 22.25 28.75 22.25H29.5C29.8045 22.25 30.25 22.5682 30.25 23V26H31.75V23C31.75 21.6104 30.5455 20.75 29.5 20.75H28.75ZM25.75 19.25C25.75 19.6642 25.4142 20 25 20C24.5858 20 24.25 19.6642 24.25 19.25C24.25 18.8358 24.5858 18.5 25 18.5C25.4142 18.5 25.75 18.8358 25.75 19.25ZM24.25 20.75V26H25.75V20.75H24.25Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d"
                          x={5}
                          y={0}
                          width={46}
                          height={46}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="2.5" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                        <filter
                          id="filter1_d"
                          x={-1}
                          y={4}
                          width={58}
                          height={58}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dy={10} />
                          <feGaussianBlur stdDeviation={10} />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.203922 0 0 0 0 0.286275 0 0 0 0 0.368627 0 0 0 0.05 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <svg
                      width={56}
                      height={61}
                      viewBox="0 0 56 61"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d)">
                        <circle cx={28} cy={23} r={18} fill="white" />
                      </g>
                      <g filter="url(#filter1_d)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M31 15.5H25C22.5147 15.5 20.5 17.5147 20.5 20V26C20.5 28.4853 22.5147 30.5 25 30.5H31C33.4853 30.5 35.5 28.4853 35.5 26V20C35.5 17.5147 33.4853 15.5 31 15.5ZM22 20C22 18.3431 23.3431 17 25 17H31C32.6569 17 34 18.3431 34 20V26C34 27.6569 32.6569 29 31 29H25C23.3431 29 22 27.6569 22 26V20ZM28 26.75C25.9289 26.75 24.25 25.0711 24.25 23C24.25 20.9289 25.9289 19.25 28 19.25C30.0711 19.25 31.75 20.9289 31.75 23C31.75 25.0711 30.0711 26.75 28 26.75ZM28 25.25C29.2426 25.25 30.25 24.2426 30.25 23C30.25 21.7574 29.2426 20.75 28 20.75C26.7574 20.75 25.75 21.7574 25.75 23C25.75 24.2426 26.7574 25.25 28 25.25ZM31.75 20C32.1642 20 32.5 19.6642 32.5 19.25C32.5 18.8358 32.1642 18.5 31.75 18.5C31.3358 18.5 31 18.8358 31 19.25C31 19.6642 31.3358 20 31.75 20Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d"
                          x={5}
                          y={0}
                          width={46}
                          height={46}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="2.5" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                        <filter
                          id="filter1_d"
                          x={-1}
                          y={4}
                          width={58}
                          height={58}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dy={10} />
                          <feGaussianBlur stdDeviation={10} />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.203922 0 0 0 0 0.286275 0 0 0 0 0.368627 0 0 0 0.05 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <svg
                      width={56}
                      height={61}
                      viewBox="0 0 56 61"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d)">
                        <circle cx={28} cy={23} r={18} fill="white" />
                      </g>
                      <g filter="url(#filter1_d)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22 15.5H34C34.8284 15.5 35.5 16.1716 35.5 17V29C35.5 29.8284 34.8284 30.5 34 30.5H22C21.1716 30.5 20.5 29.8284 20.5 29V17C20.5 16.1716 21.1716 15.5 22 15.5ZM22 17V29H34V17H22ZM27.3498 23.0033H28.75V27.5H30.25V23.0033H31.7368V21.5033H30.25V20.75C30.25 20.3358 30.5858 20 31 20H31.75V18.5H31C29.7574 18.5 28.75 19.5074 28.75 20.75V21.5033H27.3498V23.0033Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d"
                          x={5}
                          y={0}
                          width={46}
                          height={46}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="2.5" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                        <filter
                          id="filter1_d"
                          x={-1}
                          y={4}
                          width={58}
                          height={58}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dy={10} />
                          <feGaussianBlur stdDeviation={10} />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.203922 0 0 0 0 0.286275 0 0 0 0 0.368627 0 0 0 0.05 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <svg
                      width={58}
                      height={62}
                      viewBox="0 0 58 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d)">
                        <circle cx={29} cy={23} r={18} fill="white" />
                      </g>
                      <g filter="url(#filter1_d)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M37.25 23C37.25 18.4437 33.5563 14.75 29 14.75C24.4437 14.75 20.75 18.4437 20.75 23C20.75 27.5563 24.4437 31.25 29 31.25C33.5563 31.25 37.25 27.5563 37.25 23ZM22.7317 20.4909C23.4168 18.7811 24.7811 17.4168 26.4909 16.7317C26.0897 17.5062 25.775 18.4717 25.5629 19.5629C24.4717 19.775 23.5062 20.0897 22.7317 20.4909ZM31.5091 16.7317C31.9103 17.5062 32.225 18.4717 32.4371 19.5629C33.5283 19.775 34.4938 20.0897 35.2683 20.4909C34.5832 18.7811 33.2189 17.4168 31.5091 16.7317ZM22.25 23C22.25 22.3256 23.4715 21.5937 25.3359 21.1536C25.2793 21.7481 25.25 22.3663 25.25 23C25.25 23.6337 25.2793 24.2519 25.3359 24.8464C23.4715 24.4063 22.25 23.6744 22.25 23ZM32.75 23C32.75 23.6337 32.7207 24.2519 32.6641 24.8464C34.5285 24.4063 35.75 23.6744 35.75 23C35.75 22.3256 34.5285 21.5937 32.6641 21.1536C32.7207 21.7481 32.75 22.3663 32.75 23ZM22.7317 25.5091C23.5062 25.9103 24.4717 26.225 25.5629 26.4371C25.775 27.5283 26.0897 28.4938 26.4909 29.2683C24.7811 28.5832 23.4168 27.2189 22.7317 25.5091ZM32.4371 26.4371C32.225 27.5283 31.9103 28.4938 31.5091 29.2683C33.2189 28.5832 34.5832 27.2189 35.2683 25.5091C34.4938 25.9103 33.5283 26.225 32.4371 26.4371ZM26.75 23C26.75 22.2573 26.7966 21.5448 26.8795 20.8795C27.5448 20.7966 28.2573 20.75 29 20.75C29.7427 20.75 30.4552 20.7966 31.1205 20.8795C31.2034 21.5448 31.25 22.2573 31.25 23C31.25 23.7427 31.2034 24.4552 31.1205 25.1205C30.4552 25.2034 29.7427 25.25 29 25.25C28.2573 25.25 27.5448 25.2034 26.8795 25.1205C26.7966 24.4552 26.75 23.7427 26.75 23ZM27.1536 26.6641C27.5937 28.5285 28.3256 29.75 29 29.75C29.6744 29.75 30.4063 28.5285 30.8464 26.6641C30.2519 26.7207 29.6337 26.75 29 26.75C28.3663 26.75 27.7481 26.7207 27.1536 26.6641ZM29 16.25C28.3256 16.25 27.5937 17.4715 27.1536 19.3359C27.7481 19.2793 28.3663 19.25 29 19.25C29.6337 19.25 30.2519 19.2793 30.8464 19.3359C30.4063 17.4715 29.6744 16.25 29 16.25Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d"
                          x={6}
                          y={0}
                          width={46}
                          height={46}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="2.5" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                        <filter
                          id="filter1_d"
                          x={0}
                          y={4}
                          width={58}
                          height={58}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dy={10} />
                          <feGaussianBlur stdDeviation={10} />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.203922 0 0 0 0 0.286275 0 0 0 0 0.368627 0 0 0 0.05 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <svg
                      width={56}
                      height={61}
                      viewBox="0 0 56 61"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d)">
                        <circle cx={28} cy={23} r={18} fill="white" />
                      </g>
                      <g filter="url(#filter1_d)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22 15.5H34C34.8284 15.5 35.5 16.1716 35.5 17V29C35.5 29.8284 34.8284 30.5 34 30.5H22C21.1716 30.5 20.5 29.8284 20.5 29V17C20.5 16.1716 21.1716 15.5 22 15.5ZM22 17V29H34V17H22ZM28.75 20.75C28.3617 20.75 27.9514 20.8687 27.5891 21.0891L27.25 20.75H26.5V26H28V23C28 22.5682 28.4455 22.25 28.75 22.25H29.5C29.8045 22.25 30.25 22.5682 30.25 23V26H31.75V23C31.75 21.6104 30.5455 20.75 29.5 20.75H28.75ZM25.75 19.25C25.75 19.6642 25.4142 20 25 20C24.5858 20 24.25 19.6642 24.25 19.25C24.25 18.8358 24.5858 18.5 25 18.5C25.4142 18.5 25.75 18.8358 25.75 19.25ZM24.25 20.75V26H25.75V20.75H24.25Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d"
                          x={5}
                          y={0}
                          width={46}
                          height={46}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="2.5" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                        <filter
                          id="filter1_d"
                          x={-1}
                          y={4}
                          width={58}
                          height={58}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dy={10} />
                          <feGaussianBlur stdDeviation={10} />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.203922 0 0 0 0 0.286275 0 0 0 0 0.368627 0 0 0 0.05 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-8">
          <div className="cmp-cel-rit-blo">
            <div className="ctl-rit-blo-top">
              <div className="ctl-ceo-nam-top">
                <h4>{details ? (details.firstname + " " + details.lastname) : ""}</h4>
              </div>
              <div className="ctl-ceo-des-bot">
                <h4>
                  <svg
                    width={18}
                    height={16}
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.97869 10.1132L4.02939 15.648L8.99998 13.0348L13.9706 15.648L13.0213 10.1132L17.0426 6.19337L11.4853 5.38585L8.99998 0.350098L6.51468 5.38585L0.957397 6.19337L4.97869 10.1132ZM10.6037 9.32765L10.9823 11.535L8.99998 10.4928L7.01768 11.535L7.39627 9.32765L5.79256 7.76441L8.00883 7.44237L8.99998 5.43409L9.99113 7.44237L12.2074 7.76441L10.6037 9.32765Z"
                      fill="black"
                    />
                  </svg>
                  {details ? details.title : ""}
                </h4>
              </div>
              <div className="clearfix" />
            </div>
            <div className="ctl-rit-blo-bot">
              <div className="ctl-ceo-brf-des">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not
                  only five centuries.
                </p>
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentDetails;
