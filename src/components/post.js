export default function Post({Data}) {
    let maxWidth = window.innerWidth - 4.8;

    const encodedSource = (source) => {
            let encoded = source.replace('amp;s', 's')
            while(encoded.includes('amp;')){
                encoded = encoded.replace('amp;', '')
            }
            return encoded
    }

    const getSource = (maxWidth, resolutions) => {
        for(let i = (resolutions.length - 1); i > 0; i--){
            if(maxWidth >= resolutions[i].width) {
               return resolutions[i];
            }
        }
        return resolutions[0]
    }

    let {width, height, url} = Data.preview ? getSource(maxWidth*0.7*0.85, Data.preview.images[0].resolutions)
     : {
        url: "../images/reddit-logo.png",
        width: 300,
        height: 108
    }
    url = encodedSource(url) 


    return(
        <div className="post">
            {<img src={url} alt="" width={width} height={height} />}
            <h2>{Data.title}</h2>
        </div>
    )
}
