function buildClintContactPayload(input) {
  const answers = input?.answers ?? {};
  const scoring = input?.scoring ?? {};
  const rawMeta = input?.raw?.meta ?? {};
  const createdAt = input?.created_at ?? input?.raw?.body?.submission?.created_at ?? null;

  const nome = (input.nome ?? answers.nome ?? "").trim();
  const sobrenome = (input.sobrenome ?? answers.sobrenome ?? "").trim();
  const fullName = [nome, sobrenome].filter(Boolean).join(" ").trim() || null;

  const email = (input.email ?? answers.email ?? "").trim() || null;

  // Normaliza telefone -> DDI + phone (somente dígitos)
  const rawPhone = (input.whatsapp ?? answers.whatsapp ?? "").toString().trim();
  const digits = rawPhone.replace(/\D/g, "");
  let ddi = null;
  let phone = null;

  if (digits.length >= 12 && digits.startsWith("55")) {
    ddi = "55";
    phone = digits.slice(2);
  } else if (digits.length > 10) {
    ddi = digits.slice(0, 2);
    phone = digits.slice(2);
  } else if (digits.length) {
    phone = digits;
  }

  // UTM: se vier null, manda "N/A"
  const utm = {
    utm_source: input?.utm_source ?? rawMeta?.utm_source ?? null,
    utm_medium: input?.utm_medium ?? rawMeta?.utm_medium ?? null,
    utm_campaign: input?.utm_campaign ?? rawMeta?.utm_campaign ?? null,
    utm_term: input?.utm_term ?? rawMeta?.utm_term ?? null,
    utm_content: input?.utm_content ?? rawMeta?.utm_content ?? null,
  };

  const utmWithNA = Object.fromEntries(
    Object.entries(utm).map(([k, v]) => [k, v == null || v === "" ? "N/A" : String(v)])
  );

  const classificacao =
    scoring?.prefixo && scoring?.leadNumber != null
      ? `${scoring.prefixo}${scoring.leadNumber}`
      : null;
  // Novos campos - Jardiel = segmentação por pontuação 0 a 10

  /*
Lead 10: 550–595
Lead 9: 520–549
Lead 8: 490–519
Lead 7: 455–489
Lead 6: 420–454
Lead 5: 385–419
Lead 4: 340–384
Lead 3: 300–339
Lead 2: 180–299
Lead 1: 1–179*/

  const score = scoring.score;

  let avaliacao;
    switch(true) {
      case score === 0: avaliacao = 0;
        break;
      case score <= 179: avaliacao = 1;
        break;
      case score <= 299: avaliacao = 2;
        break;
      case score <= 339: avaliacao = 3;
        break;
      case score <= 384: avaliacao = 4;
        break;
      case score <= 419: avaliacao = 5;
        break;
      case score <= 454: avaliacao = 6;
        break;
      case score <= 489: avaliacao = 7;
        break;
      case score <= 519: avaliacao = 8;
        break;
      case score <= 549: avaliacao = 9;
        break;
      case score <= 595: avaliacao = 10;
        break;
      default: avaliacao = 0;
  }
};

  const fields = {
    formulario: input?.form_title ?? null,
    ...utmWithNA,
    ano_escolar: input?.ano_escolar ?? answers?.ano_escolar ?? null,
    relacao_pais: answers?.relacao_pais ?? null,
    renda_familiar: input?.renda_familiar ?? answers?.renda_familiar ?? null,
    nivel_ingles: input?.nivel_ingles ?? answers?.nivel_ingles ?? null,
    tipo_preparo: input?.tipo_preparo ?? answers?.tipo_preparo ?? null,

    // espelhos (como no exemplo)
    contactName: fullName,
    contactEmail: email,
    contactPhone: phone ?? null,

    qualificacao: scoring?.qualification ?? null,
    classificacao,
    data_de_criacao: createdAt    
  };

  // tags (sem catálogo no webhook, envio nomes)
  const tags = ["TDS Forms", scoring?.prefixo, classificacao, scoring?.qualification, input?.form_slug].filter(Boolean);

  return {
    name: fullName,
    email,
    ddi,
    phone,
    fullPhone: ddi && phone ? `+${ddi}${phone}` : (digits ? `+${digits}` : null),
    fields,
    tags,
  };

// ✅ n8n: retornar array de items
return items.map((item) => {
  const payload = buildClintContactPayload(item.json);
  return { json: payload };
});
