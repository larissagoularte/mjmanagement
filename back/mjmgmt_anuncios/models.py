from django.db import models
from mjmgmt_users.models import UserData
from django.utils.safestring import mark_safe

class Anuncio(models.Model):
    class Status(models.TextChoices):
        DISPONIVEL = 'Disponível'
        INDISPONIVEL = 'Indisponível'

    class Animais(models.TextChoices):
        PERMITIDO = 'Permitido'
        GATO =  'Gato'
        CAO = 'Cão'
        NAO_PERMITIDO = 'Não permitido'

    class CertificadoEnergetico(models.TextChoices):
        A = 'A'
        B = 'B'
        C =  'C'
        D = 'D'
        E = 'E'
        F = 'F'

    class CondicaoUso(models.TextChoices):
        NOVO = 'Novo'
        USADO = 'Usado'

    class TipoImovel(models.TextChoices):
        APARTAMENTO = 'Apartmento'
        CASA = 'Casa'
        QUARTO = 'Quarto'
        QUINTA = 'Quinta'

    class TipoEletricidade(models.TextChoices):
        GAS = 'Gás'
        ELETRICO = 'Elétrico'
        GAS_ELETRICO = 'Gás/Eletrico'

    class Despesas(models.TextChoices):
        NAO = 'Não incluídas'
        AGUA = 'Água'
        LUZ = 'Luz'
        AGUA_LUZ = 'Água e Luz'

    #INFOS OBRIGATÓRIAS
    titulo = models.CharField(max_length=40, blank=False)
    descricao = models.TextField(blank=False)
    renda = models.IntegerField(blank=False)
    tipologia = models.CharField(max_length=4, blank=False)
    localidade = models.CharField(max_length=20, blank=False)
    cidade = models.CharField(max_length=20, blank=False)
    status = models.CharField(
        max_length=12, 
        choices=Status.choices,
        default=Status.DISPONIVEL,
        blank=False
    )
    publicado = models.BooleanField(default=False)

    #INFOS OPCIONAIS
    link_maps = models.CharField(max_length=500, blank=True, null=True) 
    data_entrada = models.DateField(blank=True, null=True)
    area = models.CharField(max_length=5, blank=True, null=True)
    certificado_energetico = models.CharField( max_length=10, choices=CertificadoEnergetico.choices, blank=True, null=True)
    animais_domesticos = models.CharField(max_length=13, choices=Animais.choices, blank=True, null=True)
    casas_banho = models.IntegerField(blank=True, null=True)
    condicao_uso = models.CharField( max_length=10, choices=CondicaoUso.choices, blank=True, null=True)
    tipo_imovel = models.CharField( max_length=10, choices=TipoImovel.choices, blank=True, null=True)
    caucao = models.IntegerField(blank=True, null=True)
    fiador = models.BooleanField(blank=True, null=True)
    prazo_contrato = models.CharField(max_length=20, blank=True, null=True)
    infos_contrato = models.TextField(blank=True, null=True)
    garagem = models.BooleanField(blank=True, null=True)
    estacionamento = models.BooleanField(blank=True, null=True)
    mobiliado = models.BooleanField(blank=True, null=True)
    elevador = models.BooleanField(blank=True, null=True)
    tipo_eletricidade = models.CharField( max_length=12, choices=TipoEletricidade.choices, blank=True, null=True)
    capacidade_lotacao = models.IntegerField(blank=True, null=True)
    wifi = models.BooleanField(blank=True, null=True)
    limpeza_quinzenal = models.BooleanField(blank=True, null=True)
    despesas = models.CharField(max_length=13, choices=Despesas.choices, blank=True, null=True)
    fumadores = models.BooleanField(blank=True, null=True)

    #INFOS AUTOMATICAS
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    autor = models.ForeignKey(UserData, on_delete=models.CASCADE, related_name='anuncios')

    def __str__(self):
        return f"{self.titulo} por {self.autor}"

class ImagensAnuncio(models.Model):
    anuncio = models.ForeignKey(Anuncio, related_name='images', on_delete=models.CASCADE)
    images = models.ImageField(upload_to='images/')

    def __str__(self):
        return f"Imagem de {self.anuncio.titulo} by {self.anuncio.autor}"
