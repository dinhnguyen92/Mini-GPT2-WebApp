import { Grid, Header, Image, List, ListItem, Modal, ModalContent, ModalDescription, SemanticWIDTHS, TransitionablePortal } from "semantic-ui-react";
import { Author } from "../../../../model/author";
import { Book } from "../../../../model/book";
import Colors from "../../../style/colors";

interface Props {
  open: boolean
  author: Author
  books: Book[]
  onClose: () => void
}

export default function AuthorModalCard({ open, author, books, onClose }: Props) {

  const modalContentStyle = {
    background: '#2F2F2F',
    color: Colors.textWhite,
    boxShadow: 'none'
  }

  const headerStyle = {
    color: "#54c8ff"
  }

  const bookGridStyle = {
    margin: '0',
    width: '100%'
  }

  const quoteStyle = {
    fontStyle: 'italic'
  }

  const bookItemStyle = {
    color: Colors.linkBlue,
    paddingBottom: '15px'
  }

  const bookListPrefix = books.length > 1 ? 'Books' : 'Book'

  const numCol = books.length < 9 ? 2 : (books.length < 16 ? 3 : (books.length < 25 ? 4 : 5))
  const maxBookCountPerCol = Math.ceil(books.length / numCol)
  const bookGroups: Book[][] = []
  for (let i = 0; i < books.length; i += maxBookCountPerCol) {
    bookGroups.push(books.slice(i, i + maxBookCountPerCol));
  }
  const modalSize = numCol < 4 ? 'large' : 'fullscreen'

  return (
    <TransitionablePortal
      open={open}      
      transition={{
        animation: 'fade',
        duration: 700
      }}
    >
      <Modal open onClose={onClose} size={modalSize}>
        <ModalContent image style={modalContentStyle}>
          <Image
            wrapped
            size='medium'
            src={require(`../../../images/${author.profilePic}`)}
          />
          <ModalDescription>
            <Header style={headerStyle}>{author.name}</Header>
            <p style={quoteStyle}>{`"${author.quote}"`}</p>
            <p>{author.about}</p>
            <p>{bookListPrefix + ' used as training data:'}</p>
            <Grid style={bookGridStyle} columns={bookGroups.length as SemanticWIDTHS}>
              <Grid.Row>
                {bookGroups.map(group => (
                  <Grid.Column>
                    <List inverted relaxed>
                      {group.map(book => (
                        <ListItem
                          style={bookItemStyle}
                          href={book.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {book.name}
                        </ListItem>
                      ))}
                    </List>
                  </Grid.Column>
                ))}
              </Grid.Row>
            </Grid>
          </ModalDescription>
        </ModalContent>
      </Modal>
    </TransitionablePortal>
  )
}