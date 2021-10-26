import { Head } from "../../../components/Head";

function Concept() {
  return (
    <>
      <Head />

      <div className="pane-content--sec--main grid scrollbar">
        {/* NNTH: Remove 'max-w-screen-md mx-auto' on production */}
        <div className="page page-coininfo max-w-screen-md mx-auto">
          <div className="section section-coininfo--team">
            <div className="post-content grid grid-cols-1">

              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

              <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

              <div className="post-footer post-footer--rada">

                <div className="flex flex-col">
                  <div className="flex items-center !mb-1">
                    <img className="w-7 inline-block !ml-0 !mr-3" src="https://cdn.rada.network/images/rada.svg" alt="RADA NETWORK" />
                    <strong className="text-lg font-bold">
                      RADA
                    </strong>
                  </div>
                  <div className="ml-10 !mb-0">DAO based blockchain investment community</div>
                </div>

                <div className="flex items-center !mb-2">
                  <span className="icon w-7 text-center">
                    <i className="fa-solid fa-envelope text-lg text-yellow-500"></i>
                  </span>
                  <span className="ml-3">
                    <strong className="text-xs uppercase inline-block font-normal w-full xl:w-32">Email for work:</strong> 
                    <a href="mailto:rada.workingdrive@gmail.com">rada.workingdrive@gmail.com</a>
                  </span>
                </div>

                <div className="flex items-center !mb-2">
                  <span className="icon w-7 text-center">
                    <i className="fa-solid fa-globe text-lg text-primary-500"></i>
                  </span>
                  <span className="ml-3">
                    <strong className="text-xs uppercase inline-block font-normal w-full xl:w-32">Website:</strong> 
                    <a
                    href="https://rada.network/"
                    target="_blank"
                    rel="nofollow noopener"
                    >
                      https://rada.network/
                    </a>
                  </span>
                </div>

                <div className="flex items-center !mb-2">
                  <span className="icon w-7 text-center">
                    <i className="fa-brands fa-twitter text-lg text-blue-400"></i>
                  </span>
                  <span className="ml-3">
                    <strong className="text-xs uppercase inline-block font-normal w-full xl:w-32">Twitter:</strong> 
                    <a
                    href="https://twitter.com/radamedia"
                    target="_blank"
                    rel="nofollow noopener"
                    >
                      https://twitter.com/radamedia
                    </a>
                  </span>
                </div>

                <div className="flex items-center !mb-2">
                  <span className="icon w-7 text-center">
                    <i className="fa-brands fa-telegram text-lg text-blue-500"></i>
                  </span>
                  <span className="ml-3">
                    <strong className="text-xs uppercase inline-block font-normal w-full xl:w-32">Telegram:</strong> 
                    <a
                    href="https://t.me/joinchat/l39iN84IeUwxZjBl"
                    target="_blank"
                    rel="nofollow noopener"
                    >
                      https://t.me/joinchat/l39iN84IeUwxZjBl
                    </a>
                  </span>
                </div>

                <div className="flex items-center !mb-2">
                  <span className="icon w-7 text-center">
                    <i className="fa-solid fa-heart text-lg text-red-500"></i>
                  </span>
                  <span className="ml-3">
                    <strong className="text-xs uppercase inline-block font-normal w-full xl:w-32">Fanpage:</strong> 
                    <a
                    href="https://www.facebook.com/rada.daocomm..."
                    target="_blank"
                    rel="nofollow noopener"
                    >
                      https://www.facebook.com/rada.daocomm
                    </a>
                  </span>
                </div>

                <div className="flex items-center !mb-2">
                  <span className="icon w-7 text-center">
                    <i className="fa-brands fa-facebook text-lg text-blue-500"></i>
                  </span>
                  <span className="ml-3">
                    <strong className="text-xs uppercase inline-block font-normal w-full xl:w-32">Community:</strong> 
                    <a
                    href="https://www.facebook.com/groups/rada.co"
                    target="_blank"
                    rel="nofollow noopener"
                    >
                      https://www.facebook.com/groups/rada.co
                    </a>
                  </span>
                </div>

                <div className="flex items-center !mb-2">
                  <span className="icon w-7 text-center">
                    <i className="fa-brands fa-discord text-lg text-purple-500"></i>
                  </span>
                  <span className="ml-3">
                    <strong className="text-xs uppercase inline-block font-normal w-full xl:w-32">Discord:</strong> 
                    <a
                    href="https://discord.link/rada"
                    target="_blank"
                    rel="nofollow noopener"
                    >
                      https://discord.link/rada
                    </a>
                  </span>
                </div>

                <div className="flex items-center !mb-2">
                  <span className="icon w-7 text-center">
                    <i className="fa-brands fa-linkedin-in text-lg text-blue-800"></i>
                  </span>
                  <span className="ml-3">
                    <strong className="text-xs uppercase inline-block font-normal w-full xl:w-32">LinkedIn:</strong> 
                    <a
                    href="https://www.linkedin.com/company/rada..."
                    target="_blank"
                    rel="nofollow noopener"
                    >
                      https://www.linkedin.com/company/rada
                    </a>
                  </span>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Concept
