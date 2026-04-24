
export default function Footer() {
  return (
    <footer className="container-fluid border border-1 border-bottom-0 border-start-0 border-end-0 border-dark pt-1 pb-lg-1">
      <div className="row" style={{ color: '#FE0087' }}>
        <div className="d-flex gap-3 col-lg-6 justify-content-center align-items-center mb-1">
          <div className="btn btn-dark p-2 d-flex justify-content-center align-items-center rounded rounded-1" 
          style={{
            width: '30px', height: '30px'
          }}>
            <img src="/footer/Facebook.svg" alt="fackbook-icon" width={20} height={20}/>
          </div>
          <div className="btn btn-dark p-2 d-flex justify-content-center align-items-center rounded rounded-1" 
          style={{
            width: '30px', height: '30px'
          }}>
            <img src="/footer/Github.png" alt="Github-icon" width={30} height={30}/>
          </div>
          <div className="btn btn-dark p-2 d-flex justify-content-center align-items-center rounded rounded-1" 
          style={{
            width: '30px', height: '30px'
          }}>
            <img src="/footer/LinkedIn.svg" alt="Linkedin-icon" width={20} height={20}/>
          </div>
          <div className="btn btn-dark p-2 d-flex justify-content-center align-items-center rounded rounded-1"
           style={{
            width: '30px', height: '30px'
           }}>
            <img src="/footer/Twitter.svg" alt="Twitter-icon" width={20} height={20}/>
          </div>
        </div>
        <div className="text-center col-lg-6">
          <p className="fw-bold p-0 m-0" style={{
            color: '#9C27B0'
          }}><img src="/footer/copyright.svg" alt="copyright-icon" width={20}/> {new Date().getFullYear()} NitishWeb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
