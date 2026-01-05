import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function ModalPelaporanGratifikasi() {
  const [show, setShow] = useState(false);

  return (
    <>
        <Button variant="danger" onClick={() => setShow(true)}>
          Laporkan Gratifikasi
        </Button>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Pelaporan Gratifikasi</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nama</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Batal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPelaporanGratifikasi;
