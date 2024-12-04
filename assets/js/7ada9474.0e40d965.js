"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9677],{8295:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=n(5893),i=n(1151);const r={title:"watsonx.ai Pipeline",sidebar_position:1,description:"sample page",custom_edit_url:null},o="watsonx.ai Pipeline",a={id:"Overview/Methods/wxai Pipeline",title:"watsonx.ai Pipeline",description:"sample page",source:"@site/docs/01-Overview/02-Methods/01-wxai Pipeline.mdx",sourceDirName:"01-Overview/02-Methods",slug:"/Overview/Methods/wxai Pipeline",permalink:"/solution-ThirdPartyRisk-wxai/Overview/Methods/wxai Pipeline",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"watsonx.ai Pipeline",sidebar_position:1,description:"sample page",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Business Overview",permalink:"/solution-ThirdPartyRisk-wxai/Overview/Business Overview"},next:{title:"OpenPages with External Input",permalink:"/solution-ThirdPartyRisk-wxai/Overview/Methods/OpenPages Ext Input"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Preprocess Source Documents",id:"preprocess-source-documents",level:2},{value:"Solution Flow",id:"solution-flow",level:3},{value:"Create Reference SIG",id:"create-reference-sig",level:2},{value:"Solution Flow",id:"solution-flow-1",level:3},{value:"Create Assessor Report",id:"create-assessor-report",level:2}];function d(e){const s={em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"watsonxai-pipeline",children:["watson",(0,t.jsx)("span",{style:{color:"#3a60f6"},children:"x"}),".ai Pipeline"]}),"\n",(0,t.jsx)("div",{style:{borderBottom:"1px solid #000",marginTop:"20px",marginBottom:"20px"}}),"\n",(0,t.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(s.p,{children:["This approach relies exclusively on Python and the watson",(0,t.jsx)("span",{style:{color:"#3a60f6"},children:"x"}),".ai SDK to build the solution. Python handles the data preprocessing, transformation, and orchestration of various tasks, while watson",(0,t.jsx)("span",{style:{color:"#3a60f6"},children:"x"}),".ai powers the AI-driven analysis and predictions. Designed for teams seeking to demonstrate the capabilities of generative AI, this solution highlights watson",(0,t.jsx)("span",{style:{color:"#3a60f6"},children:"x"}),".ai's ability to effectively address the use case without requiring extensive integration."]}),"\n",(0,t.jsx)(s.p,{children:"This solution consists of three main components:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Preprocess and chunk the ",(0,t.jsx)(s.em,{children:"Minimum Security Requirement"})," Document"]}),"\n",(0,t.jsx)(s.li,{children:"Creating a Reference SIG"}),"\n",(0,t.jsx)(s.li,{children:"Creating the Assessor Report"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"TPR_Flow",src:n(6751).Z+"",width:"5026",height:"2397"})}),"\n",(0,t.jsx)(s.h2,{id:"preprocess-source-documents",children:"Preprocess Source Documents"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.p,{children:'The first step in creating the assesor report was to preprocess the Security Requirements Document into the appropriate "chunks" based off each subheading in the document to ensure accurate metadata and context for each embedding in the vectordb. Once the document has been processed into the "chunked" json, it will then be ingested into the vectordb.'}),"\n",(0,t.jsx)(s.h3,{id:"solution-flow",children:"Solution Flow"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"preprocess_flow",src:n(3625).Z+"",width:"2346",height:"1110"})}),"\n",(0,t.jsx)(s.p,{children:"An example of the preprocessed document into a json file:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"msr_example",src:n(8956).Z+"",width:"1096",height:"166"})}),"\n",(0,t.jsx)(s.h2,{id:"create-reference-sig",children:"Create Reference SIG"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.p,{children:"A reference SIG is first created before being able to create an accurate assesor report. For each SIG question, the reference SIG will consist of:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:'the "right" or most "appropriate" response'}),"\n",(0,t.jsx)(s.li,{children:"the most relevant MSR context"}),"\n",(0,t.jsx)(s.li,{children:'the most appropriate Issue information from the given "Issue Catalog"'}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The Reference SIG will be created once or updated as needed when SIG questions change. This process, which involves most of the LLM-related tasks, establishes the foundation for more efficient and consistent logic-based actions in generating the assessor report by referencing the Reference SIG as the ground truth."}),"\n",(0,t.jsx)(s.h3,{id:"solution-flow-1",children:"Solution Flow"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"ref_flow",src:n(4877).Z+"",width:"1786",height:"1473"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"An example of the Reference SIG content:"}),"\n",(0,t.jsx)(s.img,{alt:"TPR Flow",src:n(3848).Z+"",width:"2304",height:"548"})]}),"\n",(0,t.jsx)(s.h2,{id:"create-assessor-report",children:"Create Assessor Report"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.p,{children:"The assessor report can be created once the reference SIG has been generated. The final assessor report consists of ten features pulled from either the orginal vendor SIG or generated by the generative-AI pipeline:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"TPR Flow",src:n(5858).Z+"",width:"2285",height:"499"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"AI-Generated Output"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Issue:"})," classfied by comparing the vendor SIG's response and the Reference SIG's response for the same SIG question."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Gap:"}),' classified by leveraging an LLM to determine whether or not any given "Additional Information" supports or contradicts the give vendor SIG response.']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"MSR Context:"})," Search the SIG question against the MSR Context vectorDB and pull the relevant MSR content."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Reccomendation:"})," Leverage an LLM to provide a reccomentdation for any gaps and/or issue identified."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"All AI-generated content was classified based on a decision table, which was used to systematically determine how specific features aligned with predefined criteria, show below:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"truth_table",src:n(4700).Z+"",width:"1672",height:"918"})})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5858:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/assess_output-2cf556bfb8c1be1fc17256654b2dccd3.png"},8956:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/msr_example-a94d0b4b3b73262a403cf0dfea6d5cce.png"},3625:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/preprocess_docs-fc67451447748188f426fc66b72a2b35.png"},4877:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/ref_sig-4cc5cafbf54a8ebebadfa822d27cea00.png"},3848:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/ref_sig_output-67edfaa6c337c087334443220bcd9ee1.png"},6751:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/solution_flow-1b1acee153946f3e402ff77e41462967.png"},4700:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/truthtable-1d012bf4947511278c4af020f6eadeb8.png"}}]);