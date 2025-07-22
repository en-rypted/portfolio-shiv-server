

export const emailTemplate = (name) => {
     let randomMessage = [
          "Did you know? The first computer bug was an actual moth stuck in a computer! 🦋",
          "Fact: The original name for JavaScript was Mocha. ☕",
          "Debugging: Being the detective in a crime movie where you are also the murderer. 🕵️‍♂️",
          "Fact: The first website is still online: http://info.cern.ch/",
          "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
          "Fact: The first email was sent in 1971 by Ray Tomlinson. 📧",
          "Programmer wisdom: 'It's not a bug, it's an undocumented feature.' 😉",
          "Fact: The word 'algorithm' comes from the name of a Persian mathematician, Al-Khwarizmi.",
          "Why do Java developers wear glasses? Because they don't C#! 🤓",
          "Fact: The first computer mouse was made of wood. 🖱️"
        ][Math.floor(Math.random() * 10)]
    return`<!DOCTYPE html>
<html>
  <head>
  <style>
    .code {
      margin: 16px 0;
      background-color: #1e1e1e;
      color: #d4d4d4;
      font-family: Consolas, Monaco, 'Courier New', monospace;
      padding: 20px;
      border-radius: 8px;
      font-size: 1em;
      word-break: break-word;
      overflow-x: auto;
    }
    .keyword   { color: #569CD6; }
    .comment   { color: #6A9955; }
    .string    { color: #CE9178; }
    .property  { color: #9CDCFE; }
    .function  { color: #DCDCAA; }
  </style>
</head>
<body>
  <div style="font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace; background: #181818; color: #e6e6e6; padding: 32px; border-radius: 10px; max-width: 500px; margin: 0 auto; box-shadow: 0 4px 24px #00000033;">
    <h2 style="color: #00ffc8; margin-bottom: 16px;">&lt;ThankYou /&gt;</h2>
    <p>Hi <span style="color:#00ffc8;">${name}</span>,</p>
    <p>Thank you for reaching out to me! 🚀</p>
    <div class="code" style="text-align: left;">
      <span class="comment">// Your message has been received!</span><br>
      <span class="keyword">const</span> response = <span class="keyword">await</span> coder.<span class="function">reply</span>();<br>
      <span class="keyword">const</span> tempResponse = &#123;<br>
      &nbsp;&nbsp;<span class="property">message</span>: <span class="string">"Thank you for reaching out! I appreciate your interest and will get back to you as soon as possible. In the meantime, keep coding and stay awesome! 😎"</span><br>
      &#125;;<br>
      <span class="function">console</span>.log(response.<span class="property">tempResponse</span>.<span class="property">message</span>);
    </div>
    <div style="margin: 24px 0; background: #232323; color: #ffeb3b; padding: 14px 18px; border-radius: 6px; font-size: 1em;">
      <span>
       ${randomMessage}
      </span>
    </div>
    <hr style="border: none; border-top: 1px solid #333; margin: 24px 0;">
    <div style="font-size: 0.95em; color: #888;">
      <span>Best regards,</span><br/>
      <span style="color:#00ffc8;">Shiv (the coder)</span>
    </div>
    <div style="margin-top: 24px; font-size: 0.95em;">
      <span style="color:#00ffc8;">Connect with me:</span>
      <ul style="list-style:none; padding:0; margin:10px 0 0 0; display: flex; gap: 16px;">
        <li>
          <a href="https://shiv-portfolio-47ce9.web.app/" style="color:#00ffc8; text-decoration:none; display: flex; align-items: center;" target="_blank">
            <img src="https://raw.githubusercontent.com/en-rypted/portfolio-shiv-server/main/assets/portfolio.png" alt="Portfolio" width="22" height="22" style="vertical-align:middle; margin-right:6px;"/> Portfolio
          </a>
        </li>
        <li>
          <a href="https://github.com/en-rypted" style="color:#00ffc8; text-decoration:none; display: flex; align-items: center;" target="_blank">
            <img src="https://raw.githubusercontent.com/en-rypted/portfolio-shiv-server/main/assets/github-black.png" alt="GitHub" width="22" height="22" style="vertical-align:middle; margin-right:6px; background:#fff; border-radius:50%;" /> GitHub
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/shiv-wakchaure" style="color:#00ffc8; text-decoration:none; display: flex; align-items: center;" target="_blank">
            <img src="https://raw.githubusercontent.com/en-rypted/portfolio-shiv-server/main/assets/linkedin.png" alt="LinkedIn" width="22" height="22" style="vertical-align:middle; margin-right:6px;"/> LinkedIn
          </a>
        </li>
      </ul>
    </div>
    <div style="margin-top: 32px; text-align: center; color: #555; font-size: 0.85em;">
      &copy; 2024 Shiv Wakchaure. All rights reserved.
    </div>
  </div>
</body>
</html>
`;
};