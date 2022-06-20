import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { firebase_db } from '../firebaseConfig';

export default function LikeCard({ content, navigation, user_idx, reload }) {

  const dislike = function(user_idx, content_idx) {
    firebase_db.ref('like/' + user_idx + '/' + content_idx).remove();
    reload();
  }

  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={{ uri: content.image }} />
      <View style={styles.cardText}>
        <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
        <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
        <Text style={styles.cardDate}>{content.date}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('DetailPage', { idx: content.idx })}}><Text style={styles.buttonText}>자세히보기</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{dislike(user_idx, content.idx)}}><Text style={styles.buttonText}>찜 해제</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({

  card: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
    paddingBottom: 10
  },
  cardImage: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardText: {
    flex: 2,
    flexDirection: "column",
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700"
  },
  cardDesc: {
    fontSize: 15
  },
  cardDate: {
    fontSize: 10,
    color: "#A6A6A6",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  button: {
    width: 100,
    height: 40,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "pink",
    justifyContent: "center"
  },
  buttonText: {
    textAlign: "center",
    color: "pink",
    fontWeight: "bold"
  }
});