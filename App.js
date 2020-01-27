import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTitle}>
              <Text style={styles.headerText} >New</Text>
              <Text style={styles.headerText} >Collection</Text> 
          </View>
          <View style={styles.banner}>
            <Image style={styles.bannerImage} source={require('./assets/sweatshirt.png')} />
            <View style={styles.bannerText}>
              <Text style={styles.bannerTextNormal}>SAVE UP TO</Text>
              <Text style={styles.bannerTextBold}>45%<Text style={styles.bannerTextNormal}>  OFF</Text></Text> 
            </View>
          </View>
        </View>
    <View style={styles.brands}>
      <View style={styles.brandsHeader}>
        <Text style={styles.brandTitle}>BRANDS TO CRUSH ON</Text>
        <Text style={styles.brandSubTitle}>Shop our most-loved brands!</Text>
      </View>
      <View style={styles.brandsSection}>
        <View style={styles.brandsContainer}>
            <View style={styles.imageContainer}><Image resizeMode={'contain'} style={styles.brandImage} source={require('./assets/brands/tommy_hilfiger.png')} /></View>
            <Text style={styles.brandImageTitle}>Tommy Hilfiger</Text>
        </View>
        <View style={styles.brandsContainer}>
            <View style={styles.imageContainer}><Image resizeMode={'contain'} style={styles.brandImage} source={require('./assets/brands/nike.png')} /></View>
            <Text style={styles.brandImageTitle}>Nike</Text>
        </View>
        <View style={styles.brandsContainer}>
            <View style={styles.imageContainer}><Image resizeMode={'contain'} style={styles.brandImage} source={require('./assets/brands/american_eagle.png')} /></View>
            <Text style={styles.brandImageTitle}>American Eagle</Text>
        </View>
        <View style={styles.brandsContainer}>
            <View style={styles.imageContainer}><Image resizeMode={'contain'} style={styles.brandImage} source={require('./assets/brands/adidas.png')} /></View>
            <Text style={styles.brandImageTitle}>Adidas</Text>
        </View>
        <View style={styles.brandsContainer}>
            <View style={styles.imageContainer}><Image resizeMode={'contain'} style={styles.brandImage} source={require('./assets/brands/puma.png')} /></View>
            <Text style={styles.brandImageTitle}>Puma</Text>
        </View>
        <View style={styles.brandsContainer}>
            <View style={styles.imageContainer}><Image resizeMode={'contain'} style={styles.brandImage} source={require('./assets/brands/zara.png')} /></View>
            <Text style={styles.brandImageTitle}>Zara</Text>
        </View>
      </View>
    </View>
    <View style={styles.shopTypes}>
      <View style={styles.shopTypesHeader}>
          <Text style={styles.shopTypesTitle}>SHOP BY TYPE</Text>
          <Text style={styles.shopTypesSubTitle}>Shop our most-loved brands!</Text>
      </View>
      <View style={styles.shopTypesSection}>
          <View style={styles.shopTypesContainer}> 
              <Image style={styles.shopTypesImage} resizeMode={'contain'} source={require('./assets/shop-types/hoodie.png')}/>
              <Text style={styles.shopTypesImageTitle}>Hoodie</Text>
          </View>
          <View style={styles.shopTypesContainer}> 
              <Image style={styles.shopTypesImage} resizeMode={'contain'}source={require('./assets/shop-types/woolen_hoodie.png')}/>
              <Text style={styles.shopTypesImageTitle}>Woolen Hoodie</Text>
          </View>
          <View style={styles.shopTypesContainer}> 
              <Image style={styles.shopTypesImage} resizeMode={'contain'} source={require('./assets/shop-types/sweatshirt.png')}/>
              <Text style={styles.shopTypesImageTitle}>Sweatshirt</Text>
          </View>
          <View style={styles.shopTypesContainer}> 
              <Image style={styles.shopTypesImage} resizeMode={'contain'} source={require('./assets/shop-types/round_neck.png')}/>
              <Text style={styles.shopTypesImageTitle}>Round Neck</Text>
          </View>
      </View>
    </View>
    </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bannerTextNormal: {
    fontSize: 14,
    fontWeight: "normal"
  },
  bannerTextBold: {
    fontSize: 24,
    fontWeight: "bold"
  },
  bannerText: {
    padding: 10,
    marginTop: 193,
    fontWeight: "bold"
  },
  bannerImage: {
    marginTop: 30,
    width: 194, 
    height: 194,
    padding: 10,
    marginRight: 20,
    
  },
  header: {},
  headerTitle: {
    alignSelf: "center"
  },
  headerText: {
    fontSize: 30
  },
  imageContainer: {
    width: 90,
    height: 70
  },

  brands: {
    marginTop: 40,
    padding: 10,
  },
  brandsHeader: {

  },
  brandTitle: {
    fontSize: 16,
    fontWeight: "bold"
  },
  brandSubTitle: {
    fontSize: 12,
    color: '#8f9bb3',
  },
  brandsSection: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  brandsContainer: {
    padding: 10
  },
  brandImage: {
    width: 90,
    height: 70,
  },
  brandImageTitle: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14,
  },
  shopTypes: {
    padding: 20,
    marginTop: 30
  },
  shopTypesHeader: {
    
  },
  shopTypesTitle: {
    fontSize: 16,
    fontWeight: "bold"
  },
  shopTypesSubTitle: {
    fontSize: 12,
    color: '#8f9bb3',
  },
  shopTypesSection: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  shopTypesContainer: {
    padding: 15
  },
  shopTypesImage: {
    
    width: 88,
    height: 88
  },
  shopTypesImageTitle: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14,
  },
});
