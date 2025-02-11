import { useTranslation } from "next-i18next";
import Link from "next/link"
import {toast} from "react-toastify"
const TutorialWidget = function({project}){
  const {t,i18n} = useTranslation("launchpad")
  const url = project?.content?.share2earn_url
  const share2earn_url = !!url ? url : ( project?.share_campaign?.length >  0 ? `/${i18n.language}/launchverse/${project.slug}/share2earn` : "")
  return (
    <div className="flex flex-col md:flex-row mt-4 md:mt-8 max-w-2xl justify-evenly mx-auto md:space-x-4">
      {!!share2earn_url && 
      <Link href={share2earn_url}>
        <div className="w-full md:w-1/2 p-4 my-2 bg-primary-600 dark:bg-primary-700 text-white rounded-lg flex items-center cursor-pointer group">
          <span className="icon text-xl opacity-70 w-10 h-10 !flex items-center justify-center bg-gray-900 bg-opacity-50 rounded-full flex-shrink-0 mr-4 shadow">
            <i className="fa-duotone fa-hand-holding-heart"></i>
          </span>
          <div>
            <p className="mb-1 opacity-80">{t("Refer a friend to earn RIR")}</p>
          
            <a href={share2earn_url} className="group text-white">
              <span className="text-sm">{t("Join Share2Earn")}</span>
              <span className="icon text-xs relative left-1 group-hover:left-2 transition-all"><i className="fas fa-angle-right"></i></span>
            </a>
          
          </div>
        </div>
      </Link>
      }

      <div className="w-full md:w-1/2 p-4 my-2 bg-gray-100 dark:bg-gray-700 rounded-lg flex cursor-pointer items-center group">
        <span className="icon text-xl opacity-70 w-10 h-10 !flex items-center justify-center bg-white dark:bg-gray-900 rounded-full flex-shrink-0 mr-4 shadow">
          <i className="fad fa-info"></i>
        </span>
        <div>
          <p className="mb-1 opacity-80">{t("How to join RADA LaunchVerse")}</p>
          {/* <Link href={`/launchverse/${project.slug}/share2earn`}>
          <a href={`/launchverse/${project.slug}/share2earn`} className="group">
            <span className="text-sm">{t("Learn more")}</span>
            <span className="icon text-xs relative left-1 group-hover:left-2 transition-all"><i className="fas fa-angle-right"></i></span>
          </a>
          </Link> */}
          <a href={t("Learn more url")} target="_blank" className="group">
            <span className="text-sm">{t("Learn more")}</span>
            <span className="icon text-xs relative left-1 group-hover:left-2 transition-all"><i className="fas fa-angle-right"></i></span>
          </a>
        </div>
      </div>
    </div>
  )
}
export default TutorialWidget