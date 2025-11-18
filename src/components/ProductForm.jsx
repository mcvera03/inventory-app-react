import React, { useState, useEffect } from 'react'

export default function ProductForm({ initial = {}, onSave, onCancel, categories = [], providers = [] }){
  const [form, setForm] = useState({
    name: '', code: '', category_id: '', provider_id: '', stock: 0, min_stock: 0, unit:'', price:0, location:'', ...initial
  })

  useEffect(()=> setForm(f=> ({...f,...initial})), [initial])

  function change(e){
    const { name, value } = e.target
    setForm(f => ({...f, [name]: value}))
  }

  function submit(e){
    e.preventDefault()
    onSave(form)
  }

  return (
    <form className="card form" onSubmit={submit}>
      <div className="form-grid">
        <label>Nombre<input name="name" value={form.name} onChange={change} /></label>
        <label>Código<input name="code" value={form.code} onChange={change} /></label>
        <label>Categoría
          <select name="category_id" value={form.category_id || ''} onChange={change}>
            <option value="">--</option>
            {categories.map(c=> <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </label>
        <label>Proveedor
          <select name="provider_id" value={form.provider_id || ''} onChange={change}>
            <option value="">--</option>
            {providers.map(p=> <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
        </label>
        <label>Stock<input type="number" name="stock" value={form.stock} onChange={change} /></label>
        <label>Stock mínimo<input type="number" name="min_stock" value={form.min_stock} onChange={change} /></label>
        <label>Unidad<input name="unit" value={form.unit} onChange={change} /></label>
        <label>Precio<input type="number" step="0.01" name="price" value={form.price} onChange={change} /></label>
        <label>Ubicación<input name="location" value={form.location} onChange={change} /></label>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn">Guardar</button>
        <button type="button" className="btn outline" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  )
}
