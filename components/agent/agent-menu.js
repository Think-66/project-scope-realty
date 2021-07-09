import Link from "next/link";

function AgentMenu() {
  return (
    <div className="ctl-tab-lnk-bot py-4">
      <ul>
        <li>
          <Link href="/agent/1/listing" passHref>
            <a href="#">
              <svg
                width={21}
                height={21}
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.75 5.25C1.75 6.2165 2.5335 7 3.5 7C4.4665 7 5.25 6.2165 5.25 5.25C5.25 4.2835 4.4665 3.5 3.5 3.5C2.5335 3.5 1.75 4.2835 1.75 5.25ZM7 4.375H19.25V6.125H7V4.375ZM19.25 9.625H7V11.375H19.25V9.625ZM7 16.625H19.25V14.875H7V16.625ZM1.75 15.75C1.75 16.7165 2.5335 17.5 3.5 17.5C4.4665 17.5 5.25 16.7165 5.25 15.75C5.25 14.7835 4.4665 14 3.5 14C2.5335 14 1.75 14.7835 1.75 15.75ZM3.5 12.25C2.5335 12.25 1.75 11.4665 1.75 10.5C1.75 9.5335 2.5335 8.75 3.5 8.75C4.4665 8.75 5.25 9.5335 5.25 10.5C5.25 11.4665 4.4665 12.25 3.5 12.25Z"
                  fill="black"
                />
              </svg>
              <p>Listings</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/agent/1/transactions" passHref>
            <a href="#">
              <svg
                width={21}
                height={21}
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 7.875C7 4.49226 9.74226 1.75 13.125 1.75C16.5077 1.75 19.25 4.49226 19.25 7.875C19.25 11.2577 16.5077 14 13.125 14H11.375V15.75H9.625V17.5H7.875V19.25H1.75V14.5126L7.1295 9.13306C7.04371 8.72241 7 8.30139 7 7.875ZM9.625 14V12.25H13.125C15.5412 12.25 17.5 10.2912 17.5 7.875C17.5 5.45875 15.5412 3.5 13.125 3.5C10.7088 3.5 8.75 5.45875 8.75 7.875C8.75 8.3113 8.8136 8.73808 8.93732 9.14626L9.0894 9.64803L3.5 15.2374V17.5H6.125V15.75H7.875V14H9.625ZM11.375 7.875C11.375 8.8415 12.1585 9.625 13.125 9.625C14.0915 9.625 14.875 8.8415 14.875 7.875C14.875 6.9085 14.0915 6.125 13.125 6.125C12.1585 6.125 11.375 6.9085 11.375 7.875Z"
                  fill="black"
                />
              </svg>
              <p>Transactions</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/agent/1/testimonials" passHref>
            <a href="#">
              <svg
                width={21}
                height={21}
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.25 19.0787L10.5759 15.75H17.5C18.4665 15.75 19.25 14.9665 19.25 14V3.5C19.25 2.5335 18.4665 1.75 17.5 1.75H3.5C2.5335 1.75 1.75 2.5335 1.75 3.5V14C1.75 14.9665 2.5335 15.75 3.5 15.75H5.25V19.0787ZM10.0741 14L7 15.9213V14H3.5V3.5H17.5V14H10.0741Z"
                  fill="black"
                />
              </svg>
              <p>Testimonials</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/agent/1/press" passHref>
            <a href="#">
              <svg
                width={21}
                height={21}
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.85668 3.53491L5.15024 4.72068C3.59716 6.15909 2.625 8.21583 2.625 10.4996C2.625 12.7834 3.59716 14.8402 5.15024 16.2786L3.85668 17.4643C2.0196 15.7115 0.875 13.2392 0.875 10.4996C0.875 7.76001 2.0196 5.28773 3.85668 3.53491ZM7.875 10.4999C7.875 11.9497 9.05025 13.1249 10.5 13.1249C11.9497 13.1249 13.125 11.9497 13.125 10.4999C13.125 9.05017 11.9497 7.87492 10.5 7.87492C9.05025 7.87492 7.875 9.05017 7.875 10.4999ZM11.375 10.4999C11.375 10.9832 10.9832 11.3749 10.5 11.3749C10.0168 11.3749 9.625 10.9832 9.625 10.4999C9.625 10.0167 10.0168 9.62492 10.5 9.62492C10.9832 9.62492 11.375 10.0167 11.375 10.4999ZM7.74593 7.10007L6.44583 5.90831C5.17584 7.03057 4.375 8.67158 4.375 10.4996C4.375 12.3277 5.17584 13.9687 6.44583 15.091L7.74593 13.8992C6.75703 13.0971 6.125 11.8722 6.125 10.4996C6.125 9.1271 6.75703 7.90219 7.74593 7.10007ZM17.1433 3.5352C18.9804 5.28802 20.125 7.76029 20.125 10.4999C20.125 13.2395 18.9804 15.7118 17.1433 17.4646L15.8498 16.2789C17.4028 14.8404 18.375 12.7837 18.375 10.4999C18.375 8.21611 17.4028 6.15938 15.8498 4.72096L17.1433 3.5352ZM16.625 10.4999C16.625 8.67186 15.8242 7.03085 14.5542 5.90859L13.2541 7.10035C14.243 7.90247 14.875 9.12738 14.875 10.4999C14.875 11.8724 14.243 13.0974 13.2541 13.8995L14.5542 15.0912C15.8242 13.969 16.625 12.328 16.625 10.4999Z"
                  fill="black"
                />
              </svg>
              <p>Press</p>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AgentMenu;
