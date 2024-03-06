import { Grid, Image, List, ListContent, ListHeader, ListItem, SemanticWIDTHS, Statistic } from "semantic-ui-react";
import Corpus from "../../../../model/corpus";
import { useState } from "react";
import { Author } from "../../../../model/author";
import AuthorModalCard from "./AuthorModalCard";
import CommonStyles from "../../../style/commonStyles";

export default function AuthorGrid() {

  const [ selectedAuthor, setSelectedAuthor ] = useState<Author>(Corpus.authors[0])
  const [ modalOpen, setModalOpen ] = useState<boolean>(false)

  const openAuthorModal = (author: Author) => {
    setSelectedAuthor(author)
    setModalOpen(true)
  }

  const authorCountPerCol = 5
  const authorGroups: Author[][] = []
  for (let i = 0; i < Corpus.authors.length; i += authorCountPerCol) {
    authorGroups.push(Corpus.authors.slice(i, i + authorCountPerCol));
  }
  
  const gridHeightPercent = 65
  const gridWrapperStyle = {
    width: '100%',
    height: gridHeightPercent + '%',
    ...CommonStyles.centerContentStyle
  }
  const gridStyle = {
    width: '80%',
    height: '70%',
    margin: '0'
  }
  const itemStyle = {
    paddingBottom: '30px'
  }
  const authorGrid = (
    <div style={gridWrapperStyle}>
      <Grid style={gridStyle} columns={authorGroups.length as SemanticWIDTHS}>
        <Grid.Row>
          {authorGroups.map(group => (
            <Grid.Column>
              <List inverted relaxed>
                {group.map(author => (
                  <ListItem style={itemStyle}>
                    <Image avatar src={require(`../../../images/${author.profilePic}`)} />
                    <ListContent>
                      <ListHeader as='a' onClick={() => openAuthorModal(author)}>{author.name}</ListHeader>
                    </ListContent>
                  </ListItem>
                ))}
              </List>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  )

  const dataStatsHeight = 20
  const dataStatsWrapperStyle = {
    width: '100%',
    height: dataStatsHeight + '%',
    ...CommonStyles.centerContentStyle
  }
  const statsStyle = {
    paddingLeft: '40px',
    paddingRight: '40px',
  }
  // 19 authors, 213 books, 2757684 sentences (2.76 million)
  const dataStats = (
    <div style={dataStatsWrapperStyle}>
      <Statistic.Group color='blue' inverted size='large'>
        <Statistic style={statsStyle}>
          <Statistic.Value>19</Statistic.Value>
          <Statistic.Label>Authors</Statistic.Label>
        </Statistic>
        <Statistic style={statsStyle}>
          <Statistic.Value>213</Statistic.Value>
          <Statistic.Label>Books</Statistic.Label>
        </Statistic>
        <Statistic style={statsStyle}>
          <Statistic.Value>2.76 Million</Statistic.Value>
          <Statistic.Label>Sentences</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </div>
  )

  const authorsWrapperStyle = {
    width: '100%',
    height: '100%',
  }
  return (
    <>
      <AuthorModalCard
        open={modalOpen}
        author={selectedAuthor}
        onClose={() => setModalOpen(false)}
        books={Corpus.books.get(selectedAuthor.name) ?? []}
      />
      <div style={authorsWrapperStyle}>
        {authorGrid}
        {dataStats}
      </div>
    </>
  )
}