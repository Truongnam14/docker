import { Injectable } from '@nestjs/common';
import { Note } from 'src/models/note.model'
import * as admin from 'firebase-admin'


@Injectable()
export class NoteService {

    notes = []
    db: admin.firestore.Firestore
    constructor() {
        this.db = admin.firestore()
    }

    async getAll() {
        let res= []
        await this.db.collection('users').get().then((e)=>{
            e.docs.forEach((item)=>{
                res.push(item.data())
            })
        })
        return res
    }
    async createNote(note: Note) {
        note.id=Date.now().toString()

        await this.db.collection('notes').doc(note.id).set(note)

        // this.notes.push(note)
        // return 'Tao thanh cong note ' + note.id
    }
    changeNote(note: Note) {
        for (let i = 0; i < this.notes.length; i++) {
            if (note.id == this.notes[i].id) {
                this.notes[i] = note
                return 'Sua thanh cong note ' + note.id
            }
        }
        return 'khong tim thay note'
    }

}
