import React from "react";
import Navbar from "../../Components/navbar/Navbar";
import "./blog.css";
import "../../App.css"
import imgs from "../../assets/chinchilla.gif"
const Blog = () => {
  return (
    <div className="gradient__bg" >
      <Navbar />
      <div>
        <div className="radiostuff">
          <form>
            <fieldset style={{width: 120}}>
              <legend>
                name of box
              </legend>
              <label htmlFor="name" accessKey="n">Name</label>
              <input type=" text" name="firstname" size={25} maxLength={20} id="name" />
              <br />
              <input name="Host" type="radio" defaultValue="Host" />Host<br />
              <input name="NH" type="radio" defaultValue="NH" />NH<br />
              <input name="ICT" type="radio" defaultValue="ICT" />ICT<br />
              <input name="support" type="radio" defaultValue="System support" />System support<br />
              <label htmlFor="name" accessKey="n">hair color</label>
              <br />
              <input name="blue" type="radio" defaultValue="blue" />blue<br />
              <input name="White" type="radio" defaultValue="White" />White<br />
              <input name="Orange" type="radio" defaultValue="Orange" />Orange<br />
              <input name="Brown" type="radio" defaultChecked defaultValue="Brown" />Bald<br />
            </fieldset>
            <label htmlFor="name" accessKey="n">Music</label><br />
            <input name="classical" type="checkbox" defaultValue="classic" /> Classical<br />
            <input name="classical" type="checkbox" defaultValue="classic" /> Modern<br />
            <input name="classical" type="checkbox" defaultValue="classic" /> Rock<br />
            <p>Description</p>
            <textarea name="description" cols={48} rows={4} defaultValue={" enter your description here"} /><br />
            <label htmlFor="name" accessKey="n">Choose yours state</label>
            <select name="state">
              <option>CA</option>
              <option>NY</option>
              <option>SC</option>
              <option>NC</option>
              <option>NJ</option>
              <option>FL</option>
            </select>
          </form>
        </div>
        <div className="firstform">
          <form method="get">
            <fieldset style={{width: '300px'}}>
              <legend>
                Student info
              </legend>
              <label htmlFor="name" accessKey="n">Name</label>
              <input type=" text" name="firstname" size={25} maxLength={20} id="name" />
              <br /> <label htmlFor="email" accessKey="email">email</label>
              <input type=" text" name="email" size={25} maxLength={20} id="email" />
              <br /> <label htmlFor="number" accessKey="num">number</label>
              <input type="number" name="number" size={25} maxLength={12} id="num" />
              <br />
              <input type="submit" defaultValue="click" />
            </fieldset>
          </form>
        </div>
        <div className="video-container">
          <iframe width={560} height={315} src="https://www.youtube.com/embed/zAlX1V3lK5s?controls=1&autoplay=1&mute=1&playlist=zAlX1V3lK5s&loop=1" frameBorder={0} allowFullScreen>
          </iframe>
        </div>
        <div className="tablething">
        <table border={1} width="150%">
          <tbody><tr>
              <th colSpan={4}>Bluecross</th>
            </tr>
            <tr>
              <th>&nbsp;</th>
              <th colSpan={4}>ELTP33</th>
            </tr>
            <tr><td rowSpan={10}>
                <img src= {imgs} />
              </td>
            </tr><tr>
              <th>Name of track</th>
              <th>H/NH/ICT/SS</th>
            </tr>
            <tr>
              <th>Ben</th>
              <th>host</th>
            </tr>
            <tr>
              <th>Joe</th>
              <th>NH</th>
            </tr>
            <tr>
              <th>Kevin</th>
              <th>ICT</th>
            </tr>
          </tbody></table>
          </div>
      </div>
    </div>
    
  );
};

export default Blog;
