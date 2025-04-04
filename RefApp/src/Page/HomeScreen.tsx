// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
// import axios from 'axios';

// type Product = {
//   id: string;
//   name: string;
//   expirationDate: string;
//   quantity: number;
// };

// export default function HomeScreen() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const API_URL = 'http://192.168.3.82:3000';

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/api/products`);
//       console.log('Продукты:', response.data);

//       setProducts(response.data); // Добавляем сохранение данных
//       setLoading(false); // Выключаем лоадер после загрузки
//     } catch (error) {
//       console.error('Ошибка при загрузке продуктов:', error);
//       setError('Не удалось загрузить продукты');
//       setLoading(false); // Выключаем лоадер даже при ошибке
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#1FAE0" />
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.error}>{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}> Мои продукты 👀</Text>

//       <FlatList
//         data={products}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => {
//           const expirationDate = new Date(item.expirationDate);
//           expirationDate.setHours(0, 0, 0, 0);

//           const formattedDate = expirationDate.toISOString().split('T')[0];

//           return (
//             <View style={styles.productItem}>
//               <Text>{item.name}</Text>
//               <Text>Срок годности: {formattedDate}</Text>
//               <Text>Кол-во: {item.quantity}</Text>
//             </View>
//           );
//         }}
//         ListEmptyComponent={<Text>Холодильник пуст</Text>}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 50,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   productItem: {
//     padding: 15,
//     marginBottom: 10,
//     backgroundColor: '#f5f5f5',
//     borderRadius: 8,
//   },
//   productName: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   emptyText: {
//     textAlign: 'center',
//     marginTop: 20,
//     color: '#888',
//   },
//   error: {
//     color: 'red',
//     textAlign: 'center',
//   },
// });

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

type Category = {
  id: number;
  title: string;
  emoji: string;
  userId: number;
};

export default function HomeScreen() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const API_URL = 'http://192.168.3.82:3000';

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/categories`);
      console.log('Категории:', response.data);

      setCategories(response.data); // Сохраняем категории в стейт
      setLoading(false);
    } catch (error) {
      console.error('Ошибка при загрузке категорий:', error);
      setError('Не удалось загрузить категории');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#1FAE0" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Категории продуктов 👀</Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.categoryTitle}>{item.title}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Нет доступных категорий</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  emoji: {
    fontSize: 24,
    marginRight: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
});
