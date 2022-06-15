import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function AboutPage() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>HI! 스파르타코딩 앱개발 반에 오신것을 환영합니다.</Text>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.mainImgContainer}>
          <Image
            style={styles.mainImg}
            source={{uri: 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4'}}
          />
        </View>
        <View style={styles.mainContentTitleContainer}><Text style={styles.mainContentTitle}>많은 내용을 간결하게 담아내려 노력했습니다!</Text></View>
        <View style={styles.mainContentTextContainer}><Text style={styles.mainContentText}>꼭 완주하셔서 여러분것으로 만들어가시길 바라겠습니다.</Text></View>
        <View style={styles.instagramLinkContainer}>
          <TouchableOpacity style={styles.instagramLink}><Text style={styles.instagramLinkText}>여러분의 인스타그램 계정</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 50,
    backgroundColor: "pink",
  },
  titles: {
    flex: 2
  },
  titleText: {
    fontSize: 26,
    fontWeight: "800",
    color: "white",
  },
  mainContent: {
    flex: 8,
    marginTop: 30,
    backgroundColor: "white",
    borderRadius: 30
  },
  mainImgContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  mainImg: {
    width: 140,
    height: 140
  },
  mainContentTitleContainer: {
    flex: 1.5,
    justifyContent: "center",
  },
  mainContentTitle: {
    padding: 15,
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center"
  },
  mainContentTextContainer: {
    flex: 1.5,
  },
  mainContentText: {
    padding: 20,
    textAlign: "center",
    fontWeight: "500"
    
  },
  instagramLinkContainer: {
    flex: 2.0,
    justifyContent: "flex-start",
    alignItems: "center",
    
  },
  instagramLink: {
    width: "70%",
    height: "50%",
    justifyContent: "center",
    backgroundColor: "lightcyan",
    borderRadius: 10,
  },
  instagramLinkText: {
    textAlign: "center",
  }
})