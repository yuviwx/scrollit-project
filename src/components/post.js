import img from '../images/reddit-logo.png'
export default function Post({Data}) {

    let {width, height, url} = Data.source ? Data.source
     : {
        url: img,
        width: 300,
        height: 108
    }

    return(
        <div className="post">
            {<img src={url} alt="" width={width} height={height} />}
            <h2>{Data.title}</h2>
        </div>
    )
}
