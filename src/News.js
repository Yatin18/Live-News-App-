function News (props){
    
    return (
        <div className="news">
            
            <div className="Nimg">
              <img src={props.article.urlToImage}></img>
            </div>
            <h2>{props.article.title}</h2>
            <p>{props.article.description?.substring(0,100).concat("...")}
            <a href={props.article.url}>Read More...</a>
            </p>
            
            <div className="source">
                <p>Autor: {props.article.author}</p>
                <p>Source: {props.article.source.name}</p>
            </div>
        </div>
    )
}
export default News