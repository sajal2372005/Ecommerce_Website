const Title = () => {
    const userName = localStorage.getItem("UserName");
    return (

        <>
            <h1 style={{ color: '#000', fontSize: '24px', marginLeft: "40px" }}>Welcome {userName} to our e-commerce site!</h1>
            <div style={{ borderBottom: '2px solid #000', marginLeft: '40px', marginRight: '40px', paddingBottom: '20px' }}>
            </div>
            <p className="mt-6 ml-10 ">Welcome to our online store! We offer a wide variety of products at competitive prices. Happy shopping!</p>

            
            
        </>
    )
}

export default Title;