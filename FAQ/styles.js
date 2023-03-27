* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background: #eee;
}

header {
  display: flex;
  justify-content: center;
  align: center;
  padding: 15px;
  background: #3c3c3c;
  border-bottom: 3px solid #56e388;
}

header h1 {
  color: #eee;
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
}

.faqs {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 15px;
}

.faqs .faq {
  margin: 15px;
  padding: 15px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}

.faqs .faq .faq-question {
  position: relative;
  font-size: 20px;
  padding-right: 80px;
  transition: all 0.4s ease;
}

.faqs .faq .faq-question::after {
  content: "+";
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  transition: all 0.2s ease;
}

.faqs .faq .faq-answer {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.2s ease;
}

.faqs .faq.open .faq-question {
  margin-bottom: 15px;
}

.faqs .faq.open .faq-question::after {
  content: "-";
}

.faqs .faq.open .faq-answer {
  max-height: 1000px;
  opacity: 1;
}
