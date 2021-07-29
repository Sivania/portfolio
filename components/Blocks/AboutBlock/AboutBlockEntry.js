import React from "react";
import './AboutBlockEntry.css';

class AboutBlockEntry extends React.Component {
    render(props) { 
        let title
        let intro
        let img
        if (this.props.id === 0){
            title = "Introduction"
            intro = "Hi. I am Emily Warming and I am a Danish Software Engineering student. I began coding in C# in 2016 and that made me study Software Enginering at Aalborg University. During my time at Aalborg University, I have have learned C, more C#, Java and later Python for Data Science. I have also learned to use different technologies, frameworks and libraries such as .Net, Unity, Entity Framework, MSSQL, Arduino, Spark NPL and Machine Learning."
        }
        else if (this.props.id === 1){
            title = "Interests"
            intro = "I like to learn a little about everything, because I am really curious. Aside from what I have learned at University, I have also, out of interest, worked with C++, Web Development and Raspberry Pi and Linux."
        }

        return (
            <div className={"AboutEntry"}>
                <div className="AboutTitle">{title}</div>
                <div className={"AboutArticle"}>
                    <div className={"AboutTextBox"}>
                        <div className="AboutText">{intro}</div>
                    </div>
                    <img className="AboutImage" src={img}/>
                </div>
            </div>
        )
    }
}
export default AboutBlockEntry;