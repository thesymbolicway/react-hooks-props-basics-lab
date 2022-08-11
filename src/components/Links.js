const lizaLink = "https://github.com/liza"
function Links(github, linkedin) {
    return(
        <div>
            <h3>links</h3>
           {<a href={github}>{lizaLink}</a> }
        </div>
    )
}

export default Links