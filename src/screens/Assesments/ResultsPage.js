import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { BarChart } from "react-native-chart-kit";
import { Table, Row, Rows } from "react-native-table-component";
import { darkGreen, green } from "../../components/Constants";
const ResultsPage = (props) => {
  const { scores } = props.route.params;
  const header = ["ID", "Assessment", "Diagnosis", "Score"];
  const data = scores.map((score) => [
    score.id,
    score.title,
    score.diagnosis,
    score.score,
  ]);

  const chartData = {
    labels: scores.map((score) => score.id),
    datasets: [
      {
        data: scores.map((score) => score.score),
        color: (opacity = 1) => `blue`,
      },
      {
        data: scores.map((score) => score.maxScore),
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: green,
    backgroundGradientTo: "#BFDCE5",
    decimalPlaces: 1,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `black`,
    style: {
      borderRadius: 5,
    },
    barPercentage: 0.6,
  };

  const tableWidthArr = [50, 150, 100, 80];

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Results Page</Text>

        <View style={styles.chartContainer}>
          <BarChart
            data={chartData}
            width={Dimensions.get("window").width} // from react-native
            height={250}
            chartConfig={chartConfig}
            style={styles.chart}
            fromZero={true}
            yAxisSuffix=""
            showValuesOnTopOfBars={true}
          />
        </View>
        <View style={styles.table}>
          <Table borderStyle={{ borderWidth: 2, borderColor: darkGreen }}>
            <Row
              data={header}
              widthArr={tableWidthArr}
              textStyle={styles.tableHeader}
            />
            <Rows
              data={data}
              widthArr={tableWidthArr}
              textStyle={styles.tableCell}
            />
          </Table>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("Dashboard")}
        >
          <Text style={styles.buttonText}>Go to Dashboard</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    justifyContent: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  table: {
    marginTop: 20,
    paddingBottom: 20,
  },
  tableHeader: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    padding: 5,
  },
  tableCell: {
    textAlign: "center",
    fontSize: 14,
    padding: 5,
  },
  chartContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  chart: {
    borderRadius: 10,
  },
  button: {
    width: "100%",
    backgroundColor: green,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#BFDCE5",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#686A6C",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultsPage;
