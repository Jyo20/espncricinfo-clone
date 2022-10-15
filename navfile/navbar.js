function navbar() {
  return `
  <div id="mainup">
    <div id="upper">
      <p>Matches (11)</p>
      <p>PAK v ENG (1)</p>
      <p>Road Safety (1)</p>
      <p>Legends League (1)</p>
      <p>CPL (1)</p>
      <p>Marsh Cup (1)</p>
      <p>County DIV2 (4)</p>
      <p>WI-W v NZ-W (1)</p>
      <p>Road Safety (3)</p>
      <p>UAE v BAN (1)</p>
      <p>Legends League (1)</p>
      <p>NZ-A in IND (1)</p>
    </div>
    <div id="mid">
      <div class="divd">
        <div class="lispan">
          <span>LIVE</span>
          <span>•6th •Lahore</span>
        </div>
        <div class="newa">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <p>PAK</p>
          <div>
            <p>(20 ov)</p>
            <p>169/6</p>
          </div>
        </div>
        <div class="newa">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png"
            alt=""
          />
          <span>ENG</span>
        </div>
        <div class="d2">England need 161 runs in 116 balls</div>
        <hr />
        <div class="endfun">
          <p>Schedule</p>
          <p>Report</p>
          <p>Series</p>
        </div>
      </div>
      <div class="divd">
        <div class="lispan">
          <span>LIVE</span>
          <span>•Road Safety•Raipur</span>
        </div>
        <div class="newa">
          <img
            src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-SLL@2x.png"
            alt=""
          />
          <p>SL-L</p>
          <div>
            <p></p>
            <p>172/4</p>
          </div>
        </div>
        <div class="newa">
          <img
            src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-WIL@2x.png"
            alt=""
          />
          <span>WI-L</span>
          <div>
            <p>(14.4/20ov.t:173)</p>
            <p>120/4</p>
          </div>
        </div>
        <div class="d2">WI Legends need 53 runs in 31 balls.</div>
        <hr />
        <div class="endfun">
          <p>Schedule</p>
          <p>Table</p>
          <p>Videos</p>
          <p>Series</p>
        </div>
      </div>
      <div class="divd">
        <div class="lispan">
          <span>LIVE</span>
          <span>•Legends League• Jodhpur</span>
        </div>
        <div class="newa">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQupNX2tt32bIp5qDcieOm_WQ1VxgVySPrbkg&usqp=CAU"
            alt=""
          />
          <p>GG</p>
          <div>
            <p></p>
            <p>186/7</p>
          </div>
        </div>
        <div class="newa">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStaSM0W2Zmn2gKiCw16nSImSHXKcuzFtWmzg&usqp=CAU"
            alt=""
          />
          <span>BK</span>
          <div>
            <p>(15.5/20ov.T:187)</p>
            <p>144/5</p>
          </div>
        </div>
        <div class="d2">Kings need 15 runs in 12 balls.</div>
        <hr />
        <div class="endfun">
          <p>Schedule</p>
          <p>Table</p>
          <p>Videos</p>
          <p>Series</p>
        </div>
      </div>
      <div class="divd">
        <div class="lispan">
          <span>LIVE</span>
          <span>•4:30 AM•CPL•T20•Providence</span>
        </div>
        <div class="newa">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/8/86/Barbados_Tridents.png"
            alt=""
          />
          <p>Barbabods Royals</p>
          <div>
            <p>(20 ov)</p>
            <p>169/6</p>
          </div>
        </div>
        <div class="newa">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png"
            alt=""
          />
          <span>Jamaica Tallawahs</span>
        </div>
        <div class="d2">Barbabods Royals need 161 runs in 116 balls</div>
        <hr />
        <div class="endfun">
          <p>Schedule</p>
          <p>Table</p>
          <p>Fantasy</p>
          <p>Series</p>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div id="lower">
      <a href="index.html"><img src="https://wassets.hscicdn.com/static/images/logo.png" /></a>      <div class="menu-area">
        <ul>
          <li>
            <a href="./livescore.html">Live Scores</a>
            <ul class="dropdown">
              <ul>
                <li>
                  <a href="./livescore.html" style="font-weight: bold">Live Scores Home</a>
                </li>
                <li><a href="">Results</a></li>
                <li><a href="">Season view</a></li>
                <li><a href="">Desktop Scoreboard</a></li>
              </ul>
              <ul>
                <li><a href="">Schedule</a></li>
                <li><a href="">Month view</a></li>
                <li><a href="">International calendar</a></li>
              </ul>
            </ul>
          </li>
          <li>
            <a href="./menAses.html">Series</a>
            <ul class="dropdown">
              <ul>
                <li><a href="./menAses.html">India v South Africa</a></li>
                <li><a href="">IND-A v NZ-A</a></li>
                <li><a href="">UAE v Bangladesh</a></li>
                <li><a href="">Marsh Cup</a></li>
                <li><a href="">County Div1</a></li>
                <li><a href="">CPL 2022</a></li>
                <li><a href="">Legends League</a></li>
                <li><a href="">Test Championship</a></li>
                <li><a href="">CWC Super League</a></li>
                <li><a href="">-Archives-</a></li>
              </ul>
              <ul>
                <li><a href="womenAses.html">Women's Asia Cup</a></li>
                <li><a href="">Pakistan v England</a></li>
                <li><a href="">West Indies v New Zealand (W)</a></li>
                <li><a href="">Sheffield Shield</a></li>
                <li><a href="">County Div2</a></li>
                <li><a href="">Road Safety</a></li>
                <li><a href="">Men's T20 World Cup</a></li>
                <li><a href="">Women's Championship</a></li>
                <li><a href="">-Future series-</a></li>
              </ul>
            </ul>
          </li>
          <li>
            <a href="./team.html">Teams</a>
            <ul class="dropdown">
              <ul>
                <li><a href="./australia.html">Australia</a></li>
                <li><a href="https://www.espncricinfo.com/team/bangladesh-25">Bangladesh</a></li>
                <li><a href="https://www.espncricinfo.com/team/england-1">England</a></li>
                <li><a href="https://www.espncricinfo.com/team/india-6">India</a></li>
                <li><a href="https://www.espncricinfo.com/team/new-zealand-5">New Zealand</a></li>
                <li><a href="https://www.espncricinfo.com/team/pakistan-7">Pakistan</a></li>
                <li><a href="https://www.espncricinfo.com/team/south-africa-3">South Africa</a></li>
                <li><a href="https://www.espncricinfo.com/team/sri-lanka-8">Sri Lanka</a></li>
                <li><a href="https://www.espncricinfo.com/team/west-indies-4">West Indies</a></li>
                <li><a href="https://www.espncricinfo.com/team/zimbabwe-9">Zimbabwe</a></li>
              </ul>
              <ul>
                <li><a href="https://www.espncricinfo.com/team/afghanistan-40">Afghanistan</a></li>
                <li><a href="">Ireland</a></li>
                <li><a href="">Namibia</a></li>
                <li><a href="">Nepal</a></li>
                <li><a href="">Netherlands</a></li>
                <li><a href="">Oman</a></li>
                <li><a href="">PNG</a></li>
                <li><a href="">Scotland</a></li>
                <li><a href="">UAE</a></li>
                <li><a href="">USA</a></li>
              </ul>
            </ul>
          </li>
          <li>
            <a href="news.html">News</a>
            <ul class="dropdown">
              <ul>
                <li><a href="news.html">News Home</a></li>
                <li><a href="">Future of ODIs</a></li>
                <li><a href="">Ball-tampering</a></li>
                <li><a href="">Technology in cricket</a></li>
                <li><a href="">Racism</a></li>
              </ul>
            </ul>
          </li>
          <li>
            <a href="">Features</a>
            <ul class="dropdown">
              <ul>
                <li><a href="">Features Home</a></li>
                <li><a href="">Writers</a></li>
                <li><a href="">Photo galleries</a></li>
                <li><a href="">The Cricket Monthly</a></li>
              </ul>
            </ul>
          </li>
          <li>
            <a href="">Videos</a>
            <ul class="dropdown">
              <ul>
                <li><a href="">Videos Home</a></li>
                <li><a href="">T20 Time Out</a></li>
                <li><a href="">Hindi Videos</a></li>
                <li><a href="">Haan Ya Naa</a></li>
                <li><a href="">Polite Enquiries</a></li>
                <li><a href="">Newsroom</a></li>
                <li><a href="">News and Analysis</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">YouTube</a></li>
              </ul>
              <ul>
                <li><a href="">Players in focus</a></li>
                <li><a href="">T20 Time Out Hindi</a></li>
                <li><a href="">Match Day</a></li>
                <li><a href="">Fantasy Pick</a></li>
                <li><a href="">Run Order</a></li>
                <li><a href="">25 Questions</a></li>
                <li><a href="">Interviews</a></li>
                <li><a href="">Press Conference</a></li>
              </ul>
            </ul>
          </li>
          <li>
            <a href="">Stats</a>
            <ul class="dropdown">
              <ul>
                <li><a href="">Stats home</a></li>
                <li><a href="">IPL 2022</a></li>
                <li><a href="">SuperStats</a></li>
                <li><a href="">All records</a></li>
                <li><a href="">Grounds</a></li>
              </ul>
              <ul>
                <li><a href="">AskCricinfo</a></li>
                <li><a href="">Statsguru</a></li>
                <li><a href="">2022 records</a></li>
                <li><a href="">Players</a></li>
                <li><a href="">Rankings</a></li>
              </ul>
            </ul>
          </li>
        </ul>
      </div>
      <div id="linew">
        <div id="fast">
          <img
            src="https://wassets.hscicdn.com/static/images/fantasy-home.png"
            alt=""
          />
          <p> <a href="login.html">Fantasy</a></p>
        </div>
        <div id="edi">Edition IN</div>
        <div class="col">
          <div>
            <img
              onclick="myFunction()"
              src="https://www.pngall.com/wp-content/uploads/5/Crescent-Moon-PNG-Picture.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_379068.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.nicepng.com/png/full/333-3336369_multi-language-website-for-international-students-language-white.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStYAkBxsRUtnz4sh10J7Kmq-Q5_rdDsee-FNbhlP-DBcD0ycCI"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>

`;
}
export { navbar };
