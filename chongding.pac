function FindProxyForURL(url, host) {
   if(url.indexOf('chongdingdahui.com') > -1){
      return "PROXY 10.242.20.219:8017";
   }
   return "DIRECT"; 
}
