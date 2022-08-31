function domainName(url){
    return (
     url.split('/').join('')
        .split('www.').join('')
        .split('http:').join('')
        .split('https:').join('')
        .split('.')[0]
    )
}