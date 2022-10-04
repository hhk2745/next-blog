
const ApiTest = (props)=>{

  console.log('props', props);
  
  return <>
    Api TEST
    {
      props.aa.map(m=><>
        <img src={m.urls.small} alt="" />
      </>)
    }
    {/* {props.aa} */}

  </>
}

export async function getStaticProps(context) {
  const unsplash = await fetch(`https://api.unsplash.com/photos/?client_id=${__ACCESS_KEY}`);
  const data = await unsplash.json();
  return {
    props: {aa:data}, // will be passed to the page component as props
  }
}

export default ApiTest
