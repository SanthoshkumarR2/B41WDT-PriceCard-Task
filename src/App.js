import  './App.css';
import React from 'react'
import PriceCard from './PriceCard';


let data=[

  {
    plan:"FREE",
    price:"0",
    users:"Single User",
    highlight:false,
    usersEnabler:true,
    storage:"5GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAcces:"Community Acces",
    communityAccesEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:false,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:false,
    subDomain:"Free SubDomain",
    subDomainEnabler:false,
    statusReport:"Monthly Status Report",
    statusReportEnabler:false
  },
  {
    plan:"PLUS",
    price:"9",
    users:"5 Users",
    usersEnabler:true,
    highlight:true,
    storage:"50GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAcces:"Community Acces",
    communityAccesEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subDomain:"Free SubDomain",
    Domainhighlight:true,
    subDomainEnabler:true,
    statusReport:"Monthly Status Report",
    statusReportEnabler:false
  },
  {
    plan:"PRO",
    price:"49",
    users:"Unlimited Users",
    usersEnabler:true,
    highlight:true,
    storage:"150GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAcces:"Community Access",
    communityAccesEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subDomain:" Unlimited Free SubDomain",
    subDomainEnabler:true,
    highlightsubDomain:true,
    statusReport:"Monthly Status Report",
    statusReportEnabler:true
  }
]

function App() {
  return<>
   <section className="pricing py-5">
  <div className="container">
    <div className="row">
     <PriceCard data={data[0]}/>
     <PriceCard data={data[1]}/>
     <PriceCard data={data[2]}/>
    </div>
  </div>
</section>
 </>  
   
}

export default App;