const FeatureProps = (Prop) => {
   return(
      
      <div className={Prop.class}>
         <img src={Prop.image} alt="" />
         <h3>{Prop.head}</h3>
         <p>{Prop.paragraph}</p>
      </div>
      
   )
}
export default FeatureProps;