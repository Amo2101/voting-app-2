import React, { useState } from "react";
import "./styles.css";
import Header from "./Header";
import FAQ from "./FAQ";

export default function App() {
  const [faqs, setFaqs] = useState([
    {
      question: "Is online voting safe and secure?",
      answer:
        "In 99 percent of cases it is safe",
      open: true
    },
    {
      question: "What measures are in place to prevent hacking and fraud in online voting systems?",
      answer: "We use procedures and tools to safeguard the voting process",
      open: false
    },
    {
      question:
        "Can an online voting system guarantee voter anonymity and privacy?",
      answer: "Our voting system meets the requirements of the protection profile under international criteria",
      open: false
    },
    {
      question:
        "Does voters have authentication and is their data secured?",
      answer: "We ensure secrecy for our voters and secured data protection, only authorized persons have access to the servers that store your data",
      open: false
    },
    {
      question:
        "What are the advantages of online voting?",
      answer: "Voters can vote anywhere, it makes complex election eazy, lower long term costs, full transparency",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}
