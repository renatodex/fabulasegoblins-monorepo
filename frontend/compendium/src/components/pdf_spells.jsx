import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import HtmlToReact from 'html-to-react';

// Define styles
const styles = StyleSheet.create({
  page: {
  },
  column: {
    flexDirection: 'column',
    width: '50%',
    padding: 4,
  },
  main: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    paddingTop: 2,
    breakInside: 'avoid',
    pageBreakInside: 'avoid',
  },
  header: {
    backgroundColor: '#0e1818',
    padding: 7,
    borderRadius: 6,
    color: 'white',
    family: 'Helvetica-Bold',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  contentContainer: {
    fontSize: 12,
    gap: 3,
    marginBottom: 10,
  },
  spellDetails: {
    padding: 4,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 6,
    backgroundColor: 'white',
    color: 'black',
    marginBottom: 10,
    marginTop: 5,
    padding: 10
  },
  flexRow: {
    flexDirection: 'row',
    gap: 3,
  },
  spellInfo: {
    padding: 2,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#D1D5DB',
    borderRadius: 6,
  },
  shortDescription: {
    marginTop: 7,
    backgroundColor: '#D1FAE5',
    borderColor: 'black',
    borderWidth: 1,
    padding: 3,
    borderRadius: 6,
  },
  longDescription: {
    marginTop: 7,
  },
  image: {
    height: 30,
    width: 30,
    marginRight: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  codeText: {
    fontFamily: 'Courier',
    backgroundColor: '#f0f0f0',
    padding: 2,
    borderRadius: 4,
  },
});

const htmlToReactParser = new HtmlToReact.Parser();

const parseHtml = (html) => {
  const processingInstructions = [
    {
      shouldProcessNode: (node) => node.name === 'b',
      processNode: (node, children, index) => <Text key={index} style={styles.boldText}>{children}</Text>,
    },
    {
      shouldProcessNode: (node) => node.name === 'code',
      processNode: (node, children, index) => <Text key={index} style={styles.codeText}>{children}</Text>,
    },
    // {
    //   shouldProcessNode: (node) => node.name !== 'b' && node.name !== 'code',
    //   processNode: (node, children, index) => <Text key={index}>{children}</Text>,
    // },
  ];

  return htmlToReactParser.parseWithInstructions(html, () => true, processingInstructions);
};

const PdfSpells = ({ spells }) => (
  <Document>
    <Page style={styles.page} orientation='landscape'>
      <View style={styles.main}>
        {spells.map((spell) => (
          <View key={spell.id} style={styles.column}>
            <View style={styles.container}>
              <View style={styles.header}>
                <Text>{spell.title}</Text>
              </View>

              <View style={styles.contentContainer}>
                <View style={styles.spellDetails}>
                  <View style={styles.flexRow}>
                    <View style={styles.spellInfo}>
                      <Text>Custo: {spell.magic_cost ? spell.magic_cost : '-'}</Text>
                    </View>
                    <View style={styles.spellInfo}>
                      <Text>Alcance: {spell.range_type?.title || '-'}</Text>
                    </View>
                  </View>
                  <View style={styles.shortDescription}>
                    <Text>{spell.short_description.replace(/<\/?[^>]+(>|$)/g, '')}</Text>
                  </View>
                  <View style={styles.longDescription}>
                    <Text>{spell.long_description}</Text>

                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default PdfSpells;
