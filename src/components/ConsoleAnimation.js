import React, { useEffect, useState } from "react";
import "../styles/console.css";

const ConsoleAnimation = () => {
  const [typedText, setTypedText] = useState("");
  const textToType = `
    <span id="a">hollad@world</span>:<span id="b">~</span><span id="c">$</span> cd Hollad/<!-- kjsdfhkjdhsfkjdshfkj -->About_Hollad
    <br/>
    <span id="a">hollad@world</span>:<span id="b">~</span><span id="c">$</span> cat <!-- kjsdfhkjdhsfkjdshfkj -->Hollad.txt<br/><br/>
    
    Hi! Thanks for stopping by my page. My name is Olayinka Esther, but you can call me  <span id="z"> Hollad </span> - a nickname derived from my surname Oladimeji, and I've embraced it ever since. <!-- laglaglaglaglaglaglaglaglaglaglaglag --> <br/><br/> 
    My favorite code quote is "<span id="k">Do Hard Things, Code big!</span>" - a mantra I picked up from <span id="z"> Julien Barbier, CEO and Co-founder</span> of my School. <!-- sjkfhskjf -->
    
    <p>My aspiration is to create groundbreaking products akin to those of <span id="w"> Microsoft</span>, <span id="w">ChatGPT</span>... among others. </p>
    
    <p>In addition to coding, I enjoy solving puzzles, writing, and occasionally swimming.</p> <!-- ksjdokhdfgdufdfkjhfkjahdfkjhafkjhakf -->
    <p> Although I graduated with a degree in Animal Production, my passion for technology led me to explore coding during my undergraduate studies, which I found extremely fulfilling.</p>
    <p> After graduation, I decided to stay focus in what I love. And I enrolled in ALX Software Engineering program. </p>
    <p> Although, I have worked in fields like Android Development, Linux Development, Machine Learning, Web Development and little idea from Game Development until now. Currently, I'm working on other new things. And You can learn more about it on my <a href=""> Page </a>.</p><!-- kjdhjhgdgldjhgdwtoiewotwotjdfkjdfffsf -->
    <p>One thing you may notice about me is that I am either coding, reading or writing some solutions to challenges. I love to develop mobile apps, web-apps and also like solving competitive coding problems. When I'm not coding, I am writing with pleasure.
    <br><br><br>Interested in checking out some of my completed projects? <a href="https://holladworld.github.io/FlipCards-Project/"> Here you go </a>.</p><!-- hsdgfhjfkdjhfkjsdhfkjdshfkjsdhfkjsdhkfjhdskjfhksdjhfkdsj -->
    <p> Feel free to connect with me on <br> <a href="https://www.linkedin.com/in/olayinka212a/">LinkedIn</a>, <br> <a href="https://www.X.com/holladstar/">X (Twitter)</a>, <br> <a href="https://github.com/Holladworld">GitHub</a>, <br> <a href="https://medium.com/@hollad">Medium</a>, and <br> <a href="https://www.Facebook.com/olayinka212a">Facebook</a>.</p>
    
    I'm also looking forward to contributing more coding solutions and sharing insights on Hashnodes. You can find my <a href ="https://hollad.hashnode.com/">posts here </a> and access <a href ="https://hollad.bio.link"> my bio page. </a><br/><br/>

    I'm open to collaboration and idea-sharing. If you'd like to reach out, don't hesitate to send me an email at <!-- slightdelayhere-->, feel free to send me an email at <a href="mailto: oladimejiolay@outlook.com">oladimejiolay@outlook.com>.

    <p>Cheers!</p>
    <span id="a">hollad@world</span>:<span id="b">~</span><span id="c">$</span> exit
  `;

  useEffect(() => {
    const typeText = () => {
      for (let i = 0; i <= textToType.length; i++) {
        setTimeout(() => {
          setTypedText(textToType.substring(0, i));
        }, 50 * i); // Adjust typing speed as needed
      }
    };

    typeText(); 
  }, []);

  return (
    <div id="console" dangerouslySetInnerHTML={{ __html: typedText }} />
  );
};

export default ConsoleAnimation;
