import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  FlatList, //veri basan yapı.
  ScrollView, //resimleri slayt gibi gösteren
  Dimensions,
} from 'react-native';

import NewsCard from './components/NewsCard/NewsCard';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';

function App() {

//sürekli call-back fonksiyon oluşturmak yerine tek degiskenle halloluyo
  const renderNews = ({item}) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>~~ News ~~</Text>
      
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <Image
                style={styles.banner_image}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        )}

        //id yerine u_id şeklinde kayıt varsa:
        keyExtractor={item => item.u_id.toString()}
        
        //data={[1,2,3,4,5]}
        //renderItem={data => <Text>{data.item}</Text>}
        //renderItem={({item}) => <Text>{item}</Text>}
        //renderItem={({item}) => <NewsCard news ={item}/> her itemde newscard componentini getir.
        
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
    
    marginBottom: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;