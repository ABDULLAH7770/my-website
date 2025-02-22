document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // التحقق مما إذا كان المستخدم قد اختار وضع معين مسبقًا
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");
        
        // حفظ الحالة في localStorage
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });

    // إضافة تأثير تحميل الصفحة
    body.classList.add("fade-in");

    // تأثيرات التمرير عند ظهور العناصر
    const sections = document.querySelectorAll("section");
    const options = {
        root: null,
        threshold: 0.2,
        rootMargin: "0px"
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });

    // إضافة الشهادات بشكل تفاعلي
    const certificatesContainer = document.querySelector(".certificates-container");
    const certificates = [
        "شهادة في البرمجة",
        "شهادة في تحليل البيانات",
        "شهادة في الأمن السيبراني"
    ];
    
    certificates.forEach(cert => {
        const certDiv = document.createElement("div");
        certDiv.textContent = cert;
        certificatesContainer.appendChild(certDiv);
    });
});

// دالة للانتقال إلى القسم المطلوب عند الضغط على اللغة
function scrollToLanguage(language) {
    const element = document.getElementById(language);
    window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
    });
}

/* JavaScript */
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");
        localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
    });

    body.classList.add("fade-in");
    
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    sections.forEach(section => {
        observer.observe(section);
    });

    const certificatesContainer = document.querySelector(".certificates-container");
    const certificates = ["شهادة في البرمجة", "شهادة في تحليل البيانات", "شهادة في الأمن السيبراني"];
    certificates.forEach(cert => {
        const certDiv = document.createElement("div");
        certDiv.textContent = cert;
        certificatesContainer.appendChild(certDiv);
    });

    const skills = document.querySelectorAll(".skill-bar");
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fill");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skills.forEach(skill => {
        skillObserver.observe(skill);
    });
});


