// كود JavaScript للتفاعلية
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentSlideElement = document.getElementById('currentSlide');
    const totalSlidesElement = document.getElementById('totalSlides');
    const progressBar = document.getElementById('progress');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // عرض العدد الإجمالي للشرائح
    totalSlidesElement.textContent = totalSlides;
    
    // تحديث شريط التقدم
    function updateProgress() {
        const progress = ((currentSlide + 1) / totalSlides) * 100;
        progressBar.style.width = `${progress}%`;
    }
    
    // عرض الشريحة الحالية
    function showSlide(index) {
        // إخفاء جميع الشرائح
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // عرض الشريحة المطلوبة
        slides[index].classList.add('active');
        
        // تحديث رقم الشريحة الحالية
        currentSlideElement.textContent = index + 1;
        
        // تحديث حالة الأزرار
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === totalSlides - 1;
        
        // تحديث شريط التقدم
        updateProgress();
    }
    
    // الانتقال إلى الشريحة التالية
    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            showSlide(currentSlide);
        }
    }
    
    // الانتقال إلى الشريحة السابقة
    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
        }
    }
    
    // إضافة مستمعي الأحداث للأزرار
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // إضافة مستمعي الأحداث لأزرار لوحة المفاتيح
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === 'PageDown') {
            nextSlide();
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
            prevSlide();
        }
    });
    
    // عرض الشريحة الأولى عند التحميل
    showSlide(currentSlide);
});