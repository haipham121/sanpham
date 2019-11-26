import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  alignCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    height: winHeight,
    width: winWidth,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  bottomToolbar: {
    width: winWidth,
    position: 'absolute',
    height: 100,
    bottom: 0,
  },
  captureBtn: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 60,
    borderColor: "#FFFFFF",
  },
  captureBtnActive: {
    width: 80,
    height: 80,
  },
  captureBtnInternal: {
    width: 76,
    height: 76,
    borderWidth: 2,
    borderRadius: 76,
    backgroundColor: "red",
    borderColor: "transparent",
  },
  galleryContainer: {
    bottom: 100
  },
  galleryImageContainer: {
    width: 75,
    height: 75,
    marginRight: 5
  },
  galleryImage: {
    width: 75,
    height: 75
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 0,

  },
  headerGroup: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },
  imgHeader: {
    flex: 1,
  },
  avatar: {
    width: 300,
    height: 100,
    justifyContent:'center',
    alignItems:'center'
  },
  userInfo: {
    flex: 1.5,
  },
  boxBtn: {
    flexDirection: "row",
    marginTop: 15,
  },
  btn: {
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
  },
  btnLogin:{
    	     width:40,
    	     backgroundColor:'rgba(0,145,234,1)',
    	     padding:8,
    	     borderRadius: 20,
    	     marginTop:2
    
  },
  textNumber: {
    fontSize: 23,
    fontWeight: "400",
    marginBottom: 5,
  },

  imgGroup: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  scrollView: {
    flex: 0.7,
    marginTop: 10,
  },
  imgage: {
    borderRadius: 10,
    marginBottom: 10,
    width: 155,
    height: 270,
  },
  txtInput:{
    	    backgroundColor: 'rgba(0,0,0, 0.1)',
    	    width: 300,
    	     
    	    marginHorizontal: 20,
    	    padding:8,
    	    borderRadius: 20,
    	    color: '#000',
    	    marginTop:2
  	  },
    	  btnLogin:{
           width:300,
           marginHorizontal: 20,
    	     backgroundColor:'rgba(0,145,234,1)',
    	     padding:8,
    	     borderRadius: 20,
    	     marginTop:2
    	 
        },
        txtLogin:{
          	    color:'#fff',
          	    textAlign:'center'
        }	 
    
      
});