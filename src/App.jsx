import './App.css'
export default function App(){
  return(
    <div className = "page">
      <div className = "card">
        <img src = "https://i.pinimg.com/736x/fe/a2/bf/fea2bf51fdf04e727d66cc0b614915b6.jpg" alt = "Teddy bear" style = {{ 
          width:"150px",
          height :"150px",
          borderRadius : "100px",
          objectFit : "cover",
        }}
        />
        <h2 className = "name">Bhargavi</h2>
        <p className = "Role">B-tech First year student</p>
        <p className = "about">
          Hi! I am bhargavi , a first year cse strudent at KLU.<br/>
          I love to sleep , eat and exist in this world .
        </p>
        <button className = "button">Follow</button>
      </div>
      <style>
        {`
          .name{
            font-size : 24px;
            font-weight : bold;
          }
            .Role{
              font-size : 18px;
              font-weight : 500;
              }
            .about{
              font-size : 18px;
              font-weight : 500;}

        `}
      </style>

    </div>
    

  );
}



