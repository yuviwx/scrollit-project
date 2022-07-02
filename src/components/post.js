import img from '../images/reddit-logo.png'
export default function Post({Data}) {

    let {width, height, url} = Data.source ? Data.source
     : {
        url: img,
        width: 300,
        height: 108
    }

    const handleClick = () => {
        window.open(Data.postURL, '_blank');
    }

    return(
        <div className="post" onClick={handleClick} alt="go to post">
            <span>go to post</span>
            {<img src={url} alt="" width={width} height={height} />}
            <h2>{Data.title}</h2>
        </div>
    )
}
