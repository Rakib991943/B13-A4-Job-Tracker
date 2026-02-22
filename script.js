const jobs = [
    { company: "CloudSync Labs", role: "Frontend Developer", status: "Remote", desc: "Develop responsive user interfaces using React and Tailwind CSS." },
    { company: "NextGen Soft", role: "Backend Developer", status: "New York, NY", desc: "Build scalable REST APIs with Node.js and Express." },
    { company: "PixelCraft Studio", role: "UI/UX Designer", status: "San Francisco, CA", desc: "Design modern and user-friendly product interfaces." },
    { company: "AI Core Systems", role: "Machine Learning Engineer", status: "Austin, TX", desc: "Develop ML models and integrate AI features into products." },
    { company: "SecureNet Ltd", role: "Cyber Security Analyst", status: "Chicago, IL", desc: "Monitor systems and prevent security threats." },
    { company: "DevOps Hub", role: "DevOps Engineer", status: "Seattle, WA", desc: "Manage CI/CD pipelines and cloud infrastructure." },
    { company: "Startup Spark", role: "Junior JavaScript Developer", status: "Remote", desc: "Assist in building web applications and fixing bugs." },
    { company: "DataBridge Inc", role: "Database Engineer", status: "Denver, CO", desc: "Design and optimize database architecture and queries." }
];

const interViewList = [];
const rejectedList = [];

/* ⭐ signature concept from plant project */
let currentStatus = "all-filter-btn";

const container = document.getElementById("jobContainer");
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');
const mainContainer = document.querySelector('main');
const renderInterView = document.querySelector('.interviewRender');
const renderRejected = document.querySelector('.rejectedRender');
const notAvailableJobs = document.querySelector('.notAvailableJobs');

document.querySelector('.jobsCount').innerText = jobs.length;
document.querySelector('.jobsCountAll').innerText = jobs.length + " Jobs";

function calculateCount(){
    document.querySelector('.interviewCount').innerText = interViewList.length;
    document.querySelector('.rejectedCount').innerText = rejectedList.length;
}

function copyArray(source,target){
    target.length = 0;
    for(let i=0;i<source.length;i++){
        target.push(source[i]);
    }
}

/* ⭐ signature from plant project */
function toggleStyle(id){

    currentStatus = id;

    allFilterBtn.classList.remove('bg-[#3b82f6FF]','text-white');
    interviewFilterBtn.classList.remove('bg-[#3b82f6FF]','text-white');
    rejectedFilterBtn.classList.remove('bg-[#3b82f6FF]','text-white');

    allFilterBtn.classList.add('bg-gray-300','text-black');
    interviewFilterBtn.classList.add('bg-gray-300','text-black');
    rejectedFilterBtn.classList.add('bg-gray-300','text-black');

    const selected = document.getElementById(id);
    selected.classList.remove('bg-gray-300','text-black');
    selected.classList.add('bg-[#3b82f6FF]','text-white');

    if(id==="all-filter-btn"){
        container.classList.remove("hidden");
        renderInterView.classList.add("hidden");
        renderRejected.classList.add("hidden");
        notAvailableJobs.classList.add("hidden");
    }
    else if(id==="interview-filter-btn"){
        container.classList.add("hidden");
        renderRejected.classList.add("hidden");

        if(interViewList.length===0){
            renderInterView.classList.add("hidden");
            notAvailableJobs.classList.remove("hidden");
        }else{
            renderInterView.classList.remove("hidden");
            notAvailableJobs.classList.add("hidden");
        }
    }
    else if(id==="rejected-filter-btn"){
        container.classList.add("hidden");
        renderInterView.classList.add("hidden");

        if(rejectedList.length===0){
            renderRejected.classList.add("hidden");
            notAvailableJobs.classList.remove("hidden");
        }else{
            renderRejected.classList.remove("hidden");
            notAvailableJobs.classList.add("hidden");
        }
    }
}

mainContainer.addEventListener("click",function(event){

    const target = event.target;

    // ===== INTERVIEW =====
    if(target.classList.contains("interviewBtn")){
        const card = target.closest(".card");

        const statusEl = card.querySelector(".status");
        statusEl.innerText="Interview";
        statusEl.classList.remove("text-red-500");
        statusEl.classList.add("text-green-500","font-bold");

        const jobInfo={
            companyname:card.querySelector(".companyName").innerText,
            jobRole:card.querySelector(".jobRole").innerText,
            jobDesc:card.querySelector(".jobDesc").innerText
        };

        const exist=interViewList.find(function(item){
            return item.companyname===jobInfo.companyname;
        });
        if(!exist) interViewList.push(jobInfo);

        const newRejected=rejectedList.filter(function(item){
            return item.companyname!==jobInfo.companyname;
        });
        copyArray(newRejected,rejectedList);

        /* ⭐ signature behaviour */
        if(currentStatus==="rejected-filter-btn") renderRejectedViews();

        calculateCount();
        renderInterViews();
    }

    // ===== REJECTED =====
    else if(target.classList.contains("rejectedBtn")){
        const card = target.closest(".card");

        const statusEl = card.querySelector(".status");
        statusEl.innerText="Rejected";
        statusEl.classList.remove("text-green-500");
        statusEl.classList.add("text-red-500","font-bold");

        const jobInfo={
            companyname:card.querySelector(".companyName").innerText,
            jobRole:card.querySelector(".jobRole").innerText,
            jobDesc:card.querySelector(".jobDesc").innerText
        };

        const exist=rejectedList.find(function(item){
            return item.companyname===jobInfo.companyname;
        });
        if(!exist) rejectedList.push(jobInfo);

        const newInterview=interViewList.filter(function(item){
            return item.companyname!==jobInfo.companyname;
        });
        copyArray(newInterview,interViewList);

        /* ⭐ signature behaviour */
        if(currentStatus==="interview-filter-btn") renderInterViews();

        calculateCount();
        renderRejectedViews();
    }

    // ===== DELETE =====
    else if(target.classList.contains("fa-trash-can")){
        const card = target.closest(".card");
        const companyName = card.querySelector(".companyName").innerText;

        const newInterview=interViewList.filter(function(item){
            return item.companyname!==companyName;
        });
        copyArray(newInterview,interViewList);

        const newRejected=rejectedList.filter(function(item){
            return item.companyname!==companyName;
        });
        copyArray(newRejected,rejectedList);

        card.remove();

        calculateCount();
        renderInterViews();
        renderRejectedViews();
    }

});

/* CARD + RENDER unchanged */
function createCard(job){
    const card=document.createElement('div');
    card.className='card flex border p-8 justify-between mb-5';

    card.innerHTML=`
        <div class='flex justify-between w-full'>
            <div>
                <h2 class="companyName font-bold text-lg">${job.companyname||job.company}</h2>
                <p class="jobRole text-gray-600">${job.jobRole||job.role}</p>
                <span class="status"></span>
                <p class="jobDesc mt-2">${job.jobDesc||job.desc}</p>

                <div class="mt-4 flex gap-3">
                    <button class="interviewBtn border border-green-500 px-4 py-1">INTERVIEW</button>
                    <button class="rejectedBtn border border-red-500 px-4 py-1">REJECTED</button>
                </div>
            </div>

            <i class="text-red-600 fa-regular fa-trash-can cursor-pointer"></i>
        </div>
    `;
    return card;
}

function renderJobs(){
    container.innerHTML='';
    for(let i=0;i<jobs.length;i++){
        container.appendChild(createCard(jobs[i]));
    }
}

function renderInterViews(){
    renderInterView.innerHTML='';
    for(let i=0;i<interViewList.length;i++){
        renderInterView.appendChild(createCard(interViewList[i]));
    }
}

function renderRejectedViews(){
    renderRejected.innerHTML='';
    for(let i=0;i<rejectedList.length;i++){
        renderRejected.appendChild(createCard(rejectedList[i]));
    }
}

renderJobs();
calculateCount();