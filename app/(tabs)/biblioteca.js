import React from 'react';
import { View, Text, StyleSheet, Link } from 'react-native';

export default function Biblioteca() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 La meva Biblioteca</Text>
      <Text>Aquí aniran els teus llibres llegits i pendents.</Text>

      {/*enllaç amb paràmetres*/}
      <Link href={{pathname: "/detall_llibres", params: {bookId: '101', nom: "El nom del vent", autor: "Patrick Rothfuss", descripcio: "En una fonda en terra de ningú, un home es disposa a fer el relat de la seva vida per primera vegada. La veritable història que només ell coneix, una història que els rumors, les conjectures i els contes de taverna han anat deformant al llarg del temps fins a convertir-lo en un personatge llegendari al qual tothom creu ja mort: en Kvothe... músic captaire, lladre, estudiant, mag, heroi i assassí. Ara vol revelar tota la veritat sobre el mateix. I haurà de començar pel principi: la infantesa en una companyia d'artistes itinerants, els anys malvivint com a lladregot als carrers d'una ciutat gran i l'arribada a una universitat on espera trobar les respostes que ha estat buscant."}}} style={styles.card}>
        <Text style={styles.text}>Veure Detalls</Text>
      </Link>

      <Link href={{pathname: "/detall_llibres", params: {bookId: '102', nom: "El nom del vent", autor: "Patrick Rothfuss", descripcio: "En una fonda en terra de ningú, un home es disposa a fer el relat de la seva vida per primera vegada. La veritable història que només ell coneix, una història que els rumors, les conjectures i els contes de taverna han anat deformant al llarg del temps fins a convertir-lo en un personatge llegendari al qual tothom creu ja mort: en Kvothe... músic captaire, lladre, estudiant, mag, heroi i assassí. Ara vol revelar tota la veritat sobre el mateix. I haurà de començar pel principi: la infantesa en una companyia d'artistes itinerants, els anys malvivint com a lladregot als carrers d'una ciutat gran i l'arribada a una universitat on espera trobar les respostes que ha estat buscant."}}} style={styles.card}>
        <Text style={styles.text}>Veure Detalls</Text>
      </Link>

      <Link href={{pathname: "/detall_llibres", params: {bookId: '103', nom: "El nom del vent", autor: "Patrick Rothfuss", descripcio: "En una fonda en terra de ningú, un home es disposa a fer el relat de la seva vida per primera vegada. La veritable història que només ell coneix, una història que els rumors, les conjectures i els contes de taverna han anat deformant al llarg del temps fins a convertir-lo en un personatge llegendari al qual tothom creu ja mort: en Kvothe... músic captaire, lladre, estudiant, mag, heroi i assassí. Ara vol revelar tota la veritat sobre el mateix. I haurà de començar pel principi: la infantesa en una companyia d'artistes itinerants, els anys malvivint com a lladregot als carrers d'una ciutat gran i l'arribada a una universitat on espera trobar les respostes que ha estat buscant."}}} style={styles.card}>
        <Text style={styles.text}>Veure Detalls</Text>
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    color: '#007BFF',
  },
});