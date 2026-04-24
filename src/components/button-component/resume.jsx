import { Link } from "react-router"

export const Resume = () => {
    return (
        <div className="d-flex gap-2">
            <a href="/Nitish_CV_UI_FULL_STACK_2025.pdf" className="text-decoration-none">
                <button className="btn btn-outline-dark px-3">
                    <span className="text-white">Download CV </span>
                    <img src="/resume/download.svg" alt="download-icon" />
                </button>
            </a>
            <button className="btn btn-outline-warning px-3">
                <Link to={"/about"} className="text-decoration-none text-white">About Us </Link>
                <img src="/resume/info.svg" alt="info-icon" height={20} />
            </button>
        </div>
    )
}