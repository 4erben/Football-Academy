import React from 'react'

export default function Footer() {
  return (
    <div class="container footer">
    <h5>Acadimy.com</h5>
    <div class="content">
        <div class="text-block">
            <img src="logo.png" alt="logo" className='w-100'/>
            <p>تهدف أكادميتنا  إلى تدريب وتطوير مهارات اللاعبين الشباب في لعبة كرة القدم. تعمل الأكاديمية على توفير بيئة مهنية تعليمية تساعد اللاعبين على تنمية قدراتهم البدنية والفنية والنفسية، مما يؤهلهم للوصول إلى مستويات احترافية في اللعبة.</p>
        </div>
        <div>
            <h2>عن الموقع</h2>
            <a href="#">تواصل معنا</a>
            <a href="#">المدونة</a>
            <a href="#">عن الأكاديمية</a>
            <a href="#">سياسة الخصوصية</a>
        </div>
        <div>
            <label for="subscribe">سجل البريد الخاص بك :</label>
            <div class="subscribe">
                <input type="email" id="subscribe" placeholder="ادخل البريد"/>
                <button>إرسال</button>
            </div>
            <p>تابعنا :</p>
            <div class="social-icons">
                <img src="twitter-icon.svg" alt="Twitter"/>
                <img src="facebook-icon.svg" alt="Facebook"/>
                <img src="linkedin-icon.svg" alt="LinkedIn"/>
                <img src="instagram-icon.svg" alt="Instagram"/>
                <img src="whatsapp-icon.svg" alt="WhatsApp"/>
            </div>
        </div>
    </div>
</div>
  )
}
