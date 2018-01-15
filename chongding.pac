function FindProxyForURL(url, host) {
   if (shExpMatch(url,"*.chongdingdahui.com/*")) {
     return "PROXY 10.242.20.219:8017";
   }
   return "DIRECT"; 
}
