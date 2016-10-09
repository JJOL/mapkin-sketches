#Subscribe to A Tag By User

##Data
<tag id>
<user id>

##Primary Procedure
1. Check if already Subscribed
2. Send a request to tag owner with <user>
3. If owner accepts: save user in tag.subscribers
4. Notify User

##Exception: If Subscribed
1. Return error: already subscribed
