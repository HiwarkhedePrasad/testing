



document.addEventListener("DOMContentLoaded", function () {
    var newsDiv = document.getElementById("newsDiv");
    var newsSection = document.getElementById("news_section");

    // Add a click event listener to the "NEWS" div
    newsDiv.addEventListener("click", function () {
        newsSection.scrollIntoView({ behavior: "smooth" });
    });
});


    document.addEventListener("DOMContentLoaded", function () {
      
        var knownMorePrincipalBtn = document.getElementById("knownMore-principalbtn");
        var principalBroadInfo = document.getElementById("principal-broad-info");
        var collageBroadInfo = document.getElementById("collage-broad-info");
        var informationContaion = document.getElementById("information-contaion");
        var knownMoreCollagebtn = document.getElementById("knownMore-collagebtn");
        var showlessPrincipalBroadInfo = document.getElementById("showless-principal-broad-info");
        var showlessclginfo = document.getElementById("showless-clg-info");
        var moreinfo = document.getElementById("MoreInfo-clg");
        var informationSections = document.getElementById("information_section");
        var aboutgpj = document.getElementById("about-gpj");
        var infoPrincipal = document.getElementById("info-principal");
        var gpjcontainer = document.getElementById("gpj-container");

        function blockInfo() {
            if (principalBroadInfo && collageBroadInfo) {
                principalBroadInfo.style.display = 'none';
                collageBroadInfo.style.display = 'none';
            }
        }

        blockInfo();

        knownMorePrincipalBtn.addEventListener('click', () => {
            blockInfo();
            principalBroadInfo.style.display = "block";
            informationContaion.appendChild(principalBroadInfo);
            knownMoreCollagebtn.textContent = "More";
            knownMorePrincipalBtn.style.display = "none";
            informationContaion.scrollIntoView({behavior: "smooth"});
        });

        knownMoreCollagebtn.addEventListener('click', () => {
            blockInfo();
            collageBroadInfo.style.display = "block";
            informationContaion.appendChild(collageBroadInfo);
            knownMorePrincipalBtn.textContent = "More";
            knownMoreCollagebtn.style.display = "none";
            informationSections.scrollIntoView({ behavior: "smooth" });
        });

    

        showlessPrincipalBroadInfo.addEventListener('click', () => {
            blockInfo();
            gpjcontainer.scrollIntoView({behavior: "smooth"});
            knownMorePrincipalBtn.style.display = "block";
            knownMorePrincipal.textContent = "More";
            
        });

        showlessclginfo.addEventListener('click', () => {
            blockInfo();
            gpjcontainer.scrollIntoView({behavior: "smooth"});
            knownMoreCollagebtn.style.display = "block";
            knownMoreCollagebtn.textContent = "More";
        });

        moreinfo.addEventListener('click', () => {
            informationSections.scrollIntoView({ behavior: "smooth" });
            collageBroadInfo.style.display = "block";
            informationContaion.appendChild(collageBroadInfo);
            knownMorePrincipalBtn.textContent = "More";
            knownMoreCollagebtn.style.display = "none"; 
        });

        blockMissionVision();
       
        
    });

    document.addEventListener('DOMContentLoaded', () => {
        const mission_sec = document.getElementById("mission_Sec");
    const vision_sec = document.getElementById("vission_Sec");
    const missionbtn = document.getElementById("Mission");
    const visionbtn = document.getElementById("vision");

    function blockMissionVision(){
        mission_sec.style.display = "none";
        vision_sec.style.display = "none";
    }
   blockMissionVision();

       missionbtn.addEventListener('click', () => {
        blockMissionVision();
        mission_sec.style.display = "block";
       });

       visionbtn.addEventListener('click', () => {
        blockMissionVision();
        vision_sec.style.display = "block";
       });
    });