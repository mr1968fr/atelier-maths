'use client';

import { FormEvent, useState } from 'react';

const endpoint = 'https://formspree.io/f/xwlkqaay';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function CoachingForm() {
  const [state, setState] = useState<FormState>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState('submitting');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('Form submission failed');
      form.reset();
      setState('success');
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div className="coaching-form coaching-form-success" role="status" aria-live="polite">
        <span aria-hidden="true">✓</span>
        <p className="overline">Demande transmise</p>
        <h3>Merci pour votre préinscription.</h3>
        <p>
          L’Atelier des Maths a bien reçu votre demande. Vous serez recontacté afin
          d’échanger sur le parcours, le niveau et les disponibilités de l’élève.
        </p>
        <button type="button" onClick={() => setState('idle')}>
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form
      className="coaching-form"
      action={endpoint}
      method="POST"
      onSubmit={handleSubmit}
      aria-describedby="form-notice form-feedback"
    >
      <input type="hidden" name="_subject" value="Nouvelle préinscription — L’Atelier des Maths" />
      <input type="hidden" name="origine" value="Page coaching — atelier-maths" />
      <div className="coaching-form__trap" aria-hidden="true">
        <label htmlFor="website">Ne pas remplir ce champ</label>
        <input id="website" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="parent-name">Nom du parent ou responsable <span>*</span></label>
        <input id="parent-name" name="responsable" type="text" autoComplete="name" required />
      </div>
      <div>
        <label htmlFor="student-name">Prénom de l’élève <span>*</span></label>
        <input id="student-name" name="prenom_eleve" type="text" autoComplete="off" required />
      </div>
      <div className="coaching-form__full">
        <label htmlFor="email">Adresse e-mail <span>*</span></label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div>
        <label htmlFor="track">Parcours <span>*</span></label>
        <select id="track" name="parcours" defaultValue="" required>
          <option value="" disabled>Sélectionner</option>
          <option>Spécialité mathématiques</option>
          <option>Mathématiques spécifiques</option>
          <option>Voie technologique</option>
        </select>
      </div>
      <div>
        <label htmlFor="level">Besoin principal <span>*</span></label>
        <select id="level" name="besoin_principal" defaultValue="" required>
          <option value="" disabled>Sélectionner</option>
          <option>Consolider les bases</option>
          <option>Préparer l’épreuve</option>
          <option>Approfondir</option>
          <option>Je ne sais pas encore</option>
        </select>
      </div>
      <div className="coaching-form__full">
        <label htmlFor="availability">Disponibilités habituelles <span>*</span></label>
        <input
          id="availability"
          name="disponibilites"
          type="text"
          placeholder="Ex. mercredi après 17 h, samedi matin"
          required
        />
      </div>
      <div className="coaching-form__full">
        <label htmlFor="message">Objectifs ou difficultés rencontrées</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Quelques indications pour préparer le premier échange…"
        />
      </div>

      <label className="coaching-form__consent coaching-form__full">
        <input name="accord_contact" type="checkbox" value="Oui" required />
        <span>J’accepte d’être recontacté au sujet de cette demande de préinscription. <strong>*</strong></span>
      </label>

      <p className="coaching-form__full" id="form-notice">
        Les informations sont transmises via Formspree et utilisées uniquement pour
        répondre à votre demande. La préinscription ne confirme pas encore une place.
      </p>

      <div className="coaching-form__full coaching-form__actions">
        <button type="submit" disabled={state === 'submitting'}>
          {state === 'submitting' ? 'Envoi en cours…' : 'Envoyer la préinscription'}
        </button>
        <p
          id="form-feedback"
          className={state === 'error' ? 'coaching-form__feedback coaching-form__feedback--error' : 'coaching-form__feedback'}
          role="status"
          aria-live="polite"
        >
          {state === 'error'
            ? 'L’envoi n’a pas abouti. Vérifiez votre connexion, puis réessayez.'
            : 'Les champs marqués d’un astérisque sont obligatoires.'}
        </p>
      </div>
    </form>
  );
}
