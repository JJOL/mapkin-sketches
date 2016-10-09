const ObservableStream = require('../app/shared/ObservableStream.js');

function testObservableStreamForEach() {
  const stream = new ObservableStream();
  var count = 0;
  var _id =
  setInterval(() => {
    if(count < 5) {
        stream.sendItem(count++, null);
    } else {
      stream.sendLastItem(count, null);
      clearInterval(_id);
    }
  },2000);
  stream.onTerminated(() => {
    clearInterval(_id);
    console.log('The Stream Was Cancelled!');
  });
  return stream;
}



var canceller = new ObservableStream();
testObservableStreamForEach()
.map(item => item+1)
.map(item => item)
.forEach(item => {
    console.log("Item recieved "+ item);
    if(item === 3) {
      canceller.sendLastItem(1, null);
    }
  }, err => {
    if(err)
      console.log('An error Just Occured: ', err.message);
  },
  () => console.log('The Sequence Has Ended!')
)
.takeUntil(canceller);
